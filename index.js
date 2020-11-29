import CrawlerService from "./service/CrawlerService.js";
import FileService from "./service/FileService.js";
import TelegramService from "./service/TelegramService.js";

let crawlerService = new CrawlerService()
let fileService = new FileService()
let telegramService = new TelegramService()

async function run() {
    const crawlData = await crawlerService.getData()
    const savedData = await fileService.getLatest()

    if (crawlData["tarih"] !== savedData["tarih"]) {
        console.log("New data found.")
        await fileService.saveLatest(crawlData)
        await telegramService.notifyChannel(crawlData)
    } else {
        console.log("Data is identical.")
    }
}
run().then(() => console.log("Completed Successfully")).catch(() => console.log("An error occurred"))
