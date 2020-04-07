var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 0004,
    date: "27.03.2020",
    pic: "images/Adidas.png",
    t: "Adidas zahlt nicht mehr",
    prevtxt: "Adidas will anscheinend über die Corona Zeit Mietzahlungen aussetzten so Jan Runau. Man soll eng mit den Vermietern im Gespräch sein. Das Problem der Läden besteht allerdings nicht nur in Deutschland. Auch in der USA gibt es Läden die geschlossen bleiben. Die einzige Option ist der Online Handel von Adidas. ",
    txt: `Adidas will anscheinend über die Corona Zeit Mietzahlungen aussetzten so Jan Runau. Man soll eng mit den Vermietern im Gespräch sein. Das Problem der Läden besteht allerdings nicht nur in Deutschland. Auch in der USA gibt es Läden die geschlossen bleiben. Die einzige Option ist der Online Handel von Adidas. Dieser bringt allerdings nur 15 % des Umsatzes in die Taschen von Adidas. Adidas steht hier allerdings nicht alleine da. Auch andere Ketten wie H&M und Deichmann wollen Mietzahlungen aussetzten. Die Vermutung das viele weiteren Ketten folgen liegt nahe. Es wurden demnach allerdings auch ein paar neue gesetzte eingerichtet. So darf ein Vermieter jetzt nach einer Mietaussetzung erst nach 2 Jahren kündigen! Dieses Recht zählt sowohl für Gewerbe als auch für privat Personen und ist daran gebunden das die Verzögerung der Zahlung durch Corona entstanden ist. `,
    q: "https://www.tagesschau.de/inland/adidas-gewerbemiete-bundesrat-101.html"

    }).save().then(console.log("News saved"))
}
 //doit()