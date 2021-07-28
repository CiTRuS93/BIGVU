
const puppeteer = require("puppeteer");
/**
 * @param {string} url website url to screenshot
 * @param {string | URL} filename - path for saving image
 */
module.exports = async (url, filename) =>{
    try {
        new URL(url);
    } catch (ERR_INVALID_URL) {
        return false;
    }


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: filename });
    await browser.close();
    return true;

}