const {JSDOM} = require("jsdom");

const SITE_URL = "https://covid19.saglik.gov.tr"

class CrawlerService {
    constructor() {
    }

    async getData() {
        const dom = await JSDOM.fromURL(SITE_URL, {
            runScripts: "dangerously",
            includeNodeLocations: true,
        })
        const parsedData = dom.window.sondurumjson[0]
        if (!("tarih" in parsedData)) {
            throw "Corrupted Data"
        }
        return parsedData
    }
}

module.exports = { CrawlerService }
