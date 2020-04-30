var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 11,
    date: "29.03.2020",
    pic: "images/coronamonalisa.png",
    t: "Weniger gefährlich als die Grippe?",
    prevtxt: `Die ehemalige CDU-Bundestagsabgeordnete Vera Lengsfeld rief am Samstag auf Twitter dazu auf, eine Online-Petition zu unterzeichnen. Darin wird gefordert, dass alle Maßnahmen gegen die Corona-Pandemie sofort aufgehoben werden müssen`,
    txt: `Die ehemalige CDU-Bundestagsabgeordnete Vera Lengsfeld rief am Samstag auf Twitter dazu auf, eine Online-Petition zu unterzeichnen. Darin wird gefordert, dass alle Maßnahmen gegen die Corona-Pandemie sofort aufgehoben werden müssen. Begründung:

    "Die derzeitige durch das Corona Virus Covid19 hervorgerufene Grippewelle ist nachweislich weit weniger gefährlich als andere Grippewellen, was man z.B. an den Fallzahlen ablesen kann, die das Robert Koch Institut (RKI) täglich bekannt gibt. Demnach lag am 25. März 2020 die Anzahl der Infizierten bei 31.554, die Zahl der Todesfälle bei 149."
    
    Dies ist aber in vieler hinsicht einfach nur falsch. Der Vierus heißt nähmlich nicht Covid19 sondern Sars-CoV-2. Die dadurch ausgelöste Krankheit wird Covid19 genannt. Zudem lassen sich aus den Fallzahlen vom 25. März keine generellen Rückschlüsse ziehen, wie gefährlich Covid19 ist. Experten betonen immer wieder, dass man erst am Anfang der Pandemie stehe und dass es eine beträchtliche Dunkelziffer bei den Infizierten gebe und sich auch die Zahl der Todesopfer noch dramatisch erhöhen könne. Gleichzeitig könnten die Maßnahmen zur Eindämmung des Virus auch dazu führen, dass die Zahl der Todesopfer in Deutschland vergleichsweise gering bleibt.`,
    q: "https://www.tagesschau.de/faktenfinder/corona-grippevergleich-101.html"

    }).save().then(console.log("News saved"))
}
 //doit()