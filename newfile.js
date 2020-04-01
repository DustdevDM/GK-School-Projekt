var NEWS = require("./models/NEWS")

async function doit() {
    var newnews = new NEWS({
    id: 0004,
    date: "27.03.2020",
    pic: "images/Adidas.png",
    t: "Adidas zahlt nicht mehr",//DER ARTIKEL IST NOCH NICHT FERTIG MACH DAS MAL
    prevtxt: "Auch in der Türkei werden drastische Maßnahmen ergriffen. Um die ansteckungs-Gefahr von inhaftierten zu minimierten werden einige Straftäter auf freien Fuß gesetzt. Doch selbstverständlich nur die ungefährlichen der Straftäter.",
    txt: `Auch in der Türkei werden drastische Maßnahmen ergriffen. Um die Ansteckungs-Gefahr von inhaftierten zu minimierten sollen einige Straftäter auf freien Fuß gesetzt werden. Doch selbstverständlich nur die ungefährlichsten der Straftäter. Bisher sollten in Gefängnissen noch keine Corona Tests durchgeführt wurden sein. Sollte es allerdings so weit kommen, würde man sich nicht davor scheuen Tests zu machen. Dies erklärte ein Beamter des Präsidialamtes. Soweit so "gut"? Allerdings kommen alle diese Vorbereitungen nicht irgendwo her. Emma Sinclair-Webb, Türkei-Repräsentantin der Menschenrechtsorganisation "Human Rights Watch" nimmt an das es fatal wäre Corona Infizierte Wärter in den so schon überlasteten Gefängnissen beurlauben zu müssen. So will man im Fall der Fälle die Gefängnisse mit ausfällenden Mitarbeitern entlasten. Aktuell sieht der Gesetztes Entwurf vor das sogar Mörder, Diebe, Gewalt und Sexuellsträftäter vorzeitig entlassen werden könnten. Jedoch Straftäter des Staates keine Chance auf vorzeitige Entlassung haben. Die HDP fordere, das man die Inhaftierten nicht komplett entlassen, sondern nur in staatlichen Hausrest umwandeln solle. Ebenfalls Fordern Frauenorganisationen einen Verwurf des gesetztes Entwurfs da frühere Peiniger von Frauen nun bald wieder auf freien Fuß stehen könnten.`,
    q: "https://www.tagesschau.de/ausland/corona-tuerkei-103.html"

    }).save().then(console.log("News saved"))
}
doit()