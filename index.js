const Puppeteer = require('puppeteer')

(async () =>{

    let sourceURL = 'https://www.amazon.com/s?rh=n%3A172659%2Cp_72%3A4-'

    let browser = await Puppeteer.launch()
    let page = await browser.newPage()

    await page.goto(sourceURL)
    await browser.close()

})