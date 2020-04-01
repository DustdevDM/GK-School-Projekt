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
    res.render("index.ejs", {news: newsfromdb})
})




exports.WS = WS
