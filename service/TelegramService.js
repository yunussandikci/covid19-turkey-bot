const axios = require('axios');

class TelegramService {
    constructor() {
    }

    async notifyChannel(data) {
        let message = `\n*TARİH: ${data.tarih}*\n`
        message += "\n*😷 Günlük Durum*";
        message += `\nVaka: *${data.gunlukvaka}*`
        message += `\nVefat: *${data.gunlukvefat}*`
        message += `\nİyileşen: *${data.gunlukiyilesen}*`
        message += `\nTest: *${data.gunluktest}*`
        message += "\n\n*💉 Toplam Aşılama*";
        message += `\n 1. Doz Türkiye Ortalaması: *${data.dozturkiyeortalamasi}%*`
        message += `\n 2. Doz Türkiye Ortalaması: *${data.doz2turkiyeortalamasi}%*`
        message += `\n 1. Doz Sayısı: *${data.doz1asisayisi}*`
        message += `\n 2. Doz Sayısı: *${data.doz2asisayisi}*`
        message += `\n 3. Doz Sayısı: *${data.doz3asisayisi}*`

        axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
            chat_id: process.env.TELEGRAM_CHANNEL,
            text: message,
            parse_mode: "Markdown",
            disable_web_page_preview: true
        }).catch(e => {
            console.log(e)
        });
    }
}

module.exports = { TelegramService }
