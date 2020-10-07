const fs      = require("fs");
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));

//Database connection
const mongoose = require("mongoose")
mongoose.connect(config.dbtoken,{ useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("Database connection active!")
    mongoose.set('useFindAndModify', false);
})

//Webserver
const Websocket = require("./webinterfacemain")
var WS = new Websocket("1234", 34875)

var NEWS = require("./models/NEWS")
//var newnews = require("./newfile")

WS.app.get("/",async (req,res) => {
var newsfromdb = await NEWS.find({})
    res.render("index", {news: newsfromdb})
})

WS.app.get("/about", (req, res) => {
res.render("about.ejs")
})

WS.app.get("/loaderio-9f2684c50eeb9768fb9a3bb6005b7080", (req, res) => {
    res.send("loaderio-9f2684c50eeb9768fb9a3bb6005b7080")
    })


WS.app.get("/news/:id",async (req,res) => {
    var newsfromdb = await NEWS.find({id: req.params.id})
        if (newsfromdb.length == 0) return res.render("404", {message: "Der Artikel mit der ID " + req.params.id + " existiert nicht. Bist du dir sicher das du dich nicht vertippt hast?"})
        res.render("artikel", {info: newsfromdb[0]})
    })

    WS.app.use(function(req, res, next){
        res.status(404);
        res.render("404", {message: "Hier gibt es nichts zu sehen! (Hoffentlich sieht er nicht den Dreck unter dem Bett)"})
    })




exports.WS = WS
