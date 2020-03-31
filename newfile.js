var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 0002,
    date: "26.03.2020",
    pic: "images/US-AB.jpg",
    ü: "Millionen neue US-Arbeitslose",
    prevtxt: "Seit dem beginn der Corona-Krise steigen laut offiziellen Zahlen die Anträge auf Arbeitslosen Geld rasant an! Die Anträge sollen sich um ein zehnfaches erhöht haben!",
    txt: "Seit dem beginn der Corona-Krise steigen laut offiziellen Zahlen die Anträge auf Arbeitslosen Geld rasant an! Die anträfe sollen sich um ein zehnfaches erhöht haben! Die Zahl ist laut Arbeitsministerium in der Woche bis 21. März von 282.000 auf nunmehr rund 3,3 Millionen gestiegen. Kligt viel? Im gegenstatz zu vorherigen Analysen ist das noch ein kleines Übel. Denoch hatte man noch nie so einen großen ansturm! Die Webseite für Anträge sei aufgrund des hohen ansturms mehrmals zusammen gebrochen so meinte es der Gouverneur von New York.",
    q: "https://www.tagesschau.de/wirtschaft/usa-corona-wirtschaft-101.html"

    }).save().then(console.log("News saved"))
}
doit()