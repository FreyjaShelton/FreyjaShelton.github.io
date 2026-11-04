const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

const RESUMES = [
  { src: 'resume_template_tech.html', out: 'resume_tech.pdf' },
  { src: 'resume_template_non_tech.html', out: 'resume_non_tech.pdf' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const { src, out } of RESUMES) {
    await page.goto(pathToFileURL(path.join(__dirname, src)).href);
    await page.waitForTimeout(400);
    await page.pdf({
      path: path.join(__dirname, out),
      width: '8.5in', height: '11in', printBackground: true,
      margin: { top: '0in', bottom: '0in', left: '0in', right: '0in' }
    });
    console.log(`${src} -> ${out}`);
  }
  await browser.close();
})();
