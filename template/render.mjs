import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
const TASK = process.env.PROJECT_DIR || process.cwd();
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args:['--no-sandbox','--disable-gpu'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 15200 }, deviceScaleFactor: 1 });
await page.goto('file://' + TASK + '/index.html', { waitUntil: 'domcontentloaded', timeout: 60000 });
try { await Promise.race([page.evaluate(() => document.fonts.ready), page.waitForTimeout(8000)]); } catch(e){}
await page.waitForTimeout(1200);
await page.evaluate(() => {
  document.querySelectorAll('section.poster').forEach(p => {
    if (!p.querySelector('.paper-wash')) { const d = document.createElement('div'); d.className = 'paper-wash'; p.insertBefore(d, p.firstChild); }
  });
});
await page.waitForTimeout(300);
try { await page.evaluate(async () => { await Promise.all([...document.images].map(i => i.complete ? 0 : i.decode().catch(()=>0))); }); } catch(e){}
await page.waitForTimeout(400);
await mkdir(TASK + '/output', { recursive: true });
const ids = await page.$eval('section.poster', els => els.map(e => e.id));
for (const id of ids) {
  const box = await page.$eval('#' + id, el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; });
  if (Math.round(box.width) !== 1200 || Math.round(box.height) !== 1600) throw new Error(`Incorrect poster size ${id}: ${box.width}x${box.height}; expected 1200x1600`);
  await page.screenshot({ path: `${TASK}/output/${id}.png`, animations:'disabled',
    clip: { x: Math.round(box.x), y: Math.round(box.y), width: Math.round(box.width), height: Math.round(box.height) } });
  console.log('shot', id);
}
await browser.close(); console.log('DONE');
