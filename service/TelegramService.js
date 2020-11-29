import axios from "axios";

export default class TelegramService {
    notifyChannel = function (data) {
        let message = `\n*TARİH: ${data.tarih}*\n`
        message += "\n*BUGÜN*";
        message += `\n😷 Vaka: *${data.gunluk_vaka}*`
        message += `\n🧪 Test: *${data.gunluk_test}*`
        message += `\n💀 Vefat: *${data.gunluk_vefat}*`
        message += `\n🤒 Hasta: *${data.gunluk_hasta}*`
        message += `\n😇 İyileşen: *${data.gunluk_iyilesen}*`
        message += "\n\n*TOPLAM*";
        message += `\n🧪 Test: *${data.toplam_test}*`
        message += `\n😷 Hasta: *${data.toplam_hasta}*`
        message += `\n💀 Vefat: *${data.toplam_vefat}*`
        message += `\n😇 İyileşen: *${data.toplam_iyilesen}*`
        message += `\n🤕 Ağır Hasta Sayısı: *${data.agir_hasta_sayisi}*`
        message += `\n🤒 Hastalarda Zatürre Oranı: *%${data.hastalarda_zaturre_oran}*`
        message += `\n🛌 Yatak Doluluk Oranı: *%${data.yatak_doluluk_orani}*`
        message += `\n🚑 Yoğun Bakım Doluluk Orani: *%${data.eriskin_yogun_bakim_doluluk_orani}*`
        message += `\n🫁 Ventilatör Doluluk Oranı: *%${data.ventilator_doluluk_orani}*`
        message += `\n🫂 Ortalama Temaslı Tespit Süresi: *${data.ortalama_temasli_tespit_suresi} Saat*`
        message += `\n🕵🏻 Filyasyon Oranı: *%${data.filyasyon_orani}*`

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