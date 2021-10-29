const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    await page.goto('http://localhost:3000/');
    await page.waitFor(3000);
    await page.emulateMediaType('print');
    await page.pdf({
        path: './resume.pdf', // path (relative to CWD) to save the PDF to.
        printBackground: true,// print background colors
        width: '612px', // match the css width and height we set for our PDF
        height: '792px',
    });
    await browser.close();
})();