var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 8,
    date: "28.03.2020",
    pic: "images/Wer das ließt sollte für mich arbeiten.png",
    t: "Mieter müssen ihre Miete zahlen",
    prevtxt: "Viele Unternehmen wollen aktuell keine Miete zahlen da sie sowieso keine Einnahmen generieren. Unter anderem Adidas, H&M und Deichmann hatten am Freitag entsprechende Schritte ab April verkündet und wollen ihre Mietzahlungen verstunden. Die Bundesregierung hält das für unanständig und unsolidarisch.",
    txt: `Viele Unternehmen wollen aktuell keine Miete zahlen da sie sowieso keine Einnahmen generieren. Unter anderem Adidas, H&M und Deichmann hatten am Freitag entsprechende Schritte ab April verkündet und wollen ihre Mietzahlungen verstunden. Die Bundesregierung hält das für unanständig und unsolidarisch. Mieter haben weiterhin ihre Zahlungspflicht zu erfüllen und diese geht nur flöten, wenn man in Zahlungsengpässen kommt. Die Bundesregierung hatte als Teil der Corona-Hilfsgesetze entsprechende Anpassungen beschlossen. Diese sehen vor, dass das Kündigungsrecht bei ausbleibender Mietzahlung für die Dauer von zwei Jahren ausgesetzt wird. Miete, die in den nächsten drei Monaten nicht gezahlt wird, muss erst bis zum 30.06.2022 nachgeleistet sein.`,
    q: "https://www.tagesschau.de/wirtschaft/reaktion-gewerbemiete-corona-101.html"

    }).save().then(console.log("News saved"))
}
 //doit()