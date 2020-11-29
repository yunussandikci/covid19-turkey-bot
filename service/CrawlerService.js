import {JSDOM} from "jsdom";
const SITE_URL = "https://covid19.saglik.gov.tr"

export default class CrawlerService {
    getData = async function () {
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

