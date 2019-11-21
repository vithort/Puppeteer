const puppeteer = require('puppeteer')

const tirarScreenshot = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://globo.com')
    await page.screenshot({ path: 'devpleno.png' })
    /*await page.pdf({
        path: 'devpleno.pdf'
        , format: 'A4'
    })*/
    await page.close()
}

tirarScreenshot()
/*
const getInfo = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://devpleno.com')

    const info = await page.evaluate(() => {
        return {
            title: document.title
            ,w: document.documentElement.clientWidth
        }
    })
    console.log(info)

    await page.close()
}

getInfo()
*/