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
        const sondurumjsonElement = dom.window.sondurumjson[0]
        const doz1asisayisi = dom.window.doz1asisayisi
        const doz2asisayisi = dom.window.doz2asisayisi
        const doz3asisayisi = dom.window.doz3asisayisi
        const toplamasidozusayisi = dom.window.toplamasidozusayisi
        const gunluksidozusayisi = dom.window.gunluksidozusayisi
        const dozturkiyeortalamasi = dom.window.dozturkiyeortalamasi
        const doz2turkiyeortalamasi = dom.window.doz2turkiyeortalamasi
        if (!("tarih" in sondurumjsonElement)) {
            throw "Corrupted Data"
        }
        return {
            tarih: sondurumjsonElement.tarih,
            gunluktest: sondurumjsonElement.gunluk_test,
            gunlukvaka: sondurumjsonElement.gunluk_vaka,
            gunlukvefat: sondurumjsonElement.gunluk_vefat,
            gunlukiyilesen: sondurumjsonElement.gunluk_iyilesen,
            toplamasidozusayisi: toplamasidozusayisi,
            doz1asisayisi: doz1asisayisi,
            doz2asisayisi: doz2asisayisi,
            doz3asisayisi: doz3asisayisi,
            gunluksidozusayisi: gunluksidozusayisi,
            dozturkiyeortalamasi: dozturkiyeortalamasi,
            doz2turkiyeortalamasi: doz2turkiyeortalamasi,
        }
    }
}

module.exports = { CrawlerService }
