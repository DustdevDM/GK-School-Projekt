var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 12,
    date: "29.03.2020",
    pic: "images/egrhfhf.png",
    t: "Er war verzweifelt und ging von uns",
    prevtxt: `Der plötzliche Tod von Finanzminister Thomas Schäfer hat im ganzen Land große Bestürzung ausgelöst. Ministerpräsident Bouffier deutete in einem Statement an, dass der Finanzminister sehr unter der Corona-Krise gelitten habe.`,
    txt: `Der plötzliche Tod von Finanzminister Thomas Schäfer hat im ganzen Land große Bestürzung ausgelöst. Ministerpräsident Bouffier deutete in einem Statement an, dass der Finanzminister sehr unter der Corona-Krise gelitten habe.\n\nDer Schock über den plötzlichen Tod von Finanzminister Thomas Schäfer sitzt auch am Tag danach noch tief. Das war Ministerpräsident Volker Bouffier am Sonntagmittag deutlich anzumerken, als er in der Staatskanzlei in Wiesbaden vor die Mikrofone trat. "Der Anlass ist der traurigste, zu dem wir je eingeladen haben", hatte Staatsekretär Michael Bußer dessen Statement eingeleitet.

    "Die Nachricht traf mich und uns alle völlig unvorbereitet", sagte Bouffier. Er sei "geschockt, fassungslos und unendlich traurig". Seine Gedanken seien in dieser Stunde besonders bei der Familie, der Frau und den Kindern von Thomas Schäfer.\nSchäfers Tod sei ein großer Verlust für das Land Hessen. "Gerade ihn hätten wir in einer so schweren Zeit besonders gebraucht", sagte Bouffier. In solch einer Krise bedürfe es vor allem Besonnenheit und Tatkraft. "Für beides stand Thomas Schäfer".`,
    q: "https://www.hessenschau.de/politik/ministerpraesident-bouffier-zum-tod-von-thomas-schaefer-er-war-verzweifelt-und-ging-von-uns,schaefer-pk-bouffier-100.html"

    }).save().then(console.log("News saved"))
}
 //doit()