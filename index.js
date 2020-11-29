const { CrawlerService } = require('./service/CrawlerService');
const { FileService } = require('./service/FileService');
const { TelegramService } = require('./service/TelegramService');


async function run() {
    let fileService = new FileService();
    let telegramService = new TelegramService();
    let crawlerService = new CrawlerService();

    const savedData = await fileService.getLatest()
    const crawlData = await crawlerService.getData()

    if (crawlData["tarih"] !== savedData["tarih"]) {
        console.log("New data found.")
        await fileService.saveLatest(crawlData)
        await telegramService.notifyChannel(crawlData)
    } else {
        console.log("Data is identical.")
    }
}
run().then(() => console.log("Completed Successfully")).catch(x => console.log(`An error occurred Err: ${x}`))
