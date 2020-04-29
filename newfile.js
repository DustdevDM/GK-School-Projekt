var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 10,
    date: "29.03.2020",
    pic: "images/INDEN CORONA.png",
    t: "Welche Folgen das Corona auf Inden hat",
    prevtxt: `Durch das Coronavirus ist auch in der indischen Stadt Delhi eine Ausgangssperre verhängt worden. Nun hängen 10.000 Arbeiter verzweifelt in der Hauptstadt fest und versuchen verzweifelt zurück in ihre Heimatdörfer zu kommen. Nach der Ausgangssperre, die von der Regierung kommt wurden viele Menschen, die durch den Arbeitsstopp nicht mehr Arbeiten konnten Obdachlos und Arbeitslos.`,
    txt: `Durch das Coronavirus ist auch in der indischen Stadt Delhi eine Ausgangssperre verhängt worden. Nun hängen 10.000 Arbeiter verzweifelt in der Hauptstadt fest und versuchen verzweifelt zurück in ihre Heimatdörfer zu kommen. Nach der Ausgangssperre, die von der Regierung kommt wurden viele Menschen, die durch den Arbeitsstopp nicht mehr Arbeiten konnten Obdachlos und Arbeitslos. Wobei zweiteres sich nach der Kreise wieder lösen sollte. Ein Riesiges Gedrängel besteht besonders an allen Bahnhöfen der Statt. Versuche der Polizisten um Ordnung in die Menge zu bekommen sind vergebens. Alle wollen so schnell wie möglich raus. Die Regierung von Uttar Pradesh hat jetzt angekündigt Verkehrsmittel bereits zu stellen, um gestrandete Menschen zurück in ihre Dörfer zu bekommen. (Kommentar des Autors: Wäre der Lockdown der Stadt nicht dann total unnötig?) Auch medizinische Hilfe wurde angekündigt.`,
    q: "https://www.tagesschau.de/ausland/indien-corona-103.html"

    }).save().then(console.log("News saved"))
}
 //doit()