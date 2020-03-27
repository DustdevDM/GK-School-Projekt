const fs      = require("fs");

//Webserver
const Websocket = require("./webinterfacemain")
var WS = new Websocket("1234", 34875, client)

WS.app.get("/", (req,res) => {
    res.render("index.ejs")
})



exports.WS = WS
