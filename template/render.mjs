import { chromium } from 'playwright';
const TASK = '/workspace/group/<PROJECT_DIR>';
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', args:['--no-sandbox','--disable-gpu'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 15200 }, deviceScaleFactor: 2 });
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
const ids = await page.$$eval('section.poster', els => els.map(e => e.id));
for (const id of ids) {
  const box = await page.$eval('#' + id, el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; });
  await page.screenshot({ path: `${TASK}/output/${id}.png`, animations:'disabled',
    clip: { x: Math.round(box.x), y: Math.round(box.y), width: Math.round(box.width), height: Math.round(box.height) } });
  console.log('shot', id);
}
await browser.close(); console.log('DONE');
