const Puppeteer = require('puppeteer');

(async () => {
    console.log('\n----- Amazon TV Web Scrape Results: -----\n')

    let sourceURL = 'https://www.amazon.com/s?rh=n%3A172659%2Cp_72%3A4'

    let browser = await Puppeteer.launch()
    let page = await browser.newPage()

    await page.goto(sourceURL)

    let tvRes = await page.evaluate(()=>{
        let tvEntry = document.querySelectorAll('div[data-component-type="s-search-result"]')
        tvTemp = []

        tvEntry.forEach(async (item) =>{
            let tvName = await item.querySelector('span[class="a-size-base-plus a-color-base a-text-normal"]').textContent
            let tvPrice = await item.querySelector('span[class="a-offscreen"]').textContent
            let itemPush = {name: tvName, price: tvPrice}
            tvTemp.push(itemPush)
        })
        return tvTemp
    })

    await page.screenshot({ path: './screenShots/tvScreenshot.png', fullPage: true})
    await browser.close()

    console.log(tvRes)
})()