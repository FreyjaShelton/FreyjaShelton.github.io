const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

const [srcArg, outArg] = process.argv.slice(2);
const SRC = path.resolve(srcArg || 'resume_template.html');
const OUT = path.resolve(outArg || 'resume.pdf');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pathToFileURL(SRC).href);
  await page.waitForTimeout(400);
  await page.pdf({
    path: OUT,
    width: '8.5in', height: '11in', printBackground: true,
    margin: { top: '0in', bottom: '0in', left: '0in', right: '0in' }
  });
  await browser.close();
})();