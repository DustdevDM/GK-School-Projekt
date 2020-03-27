const express = require('express')

const bodyParser = require("body-parser");
const path = require('path')
var expressLayouts = require('express-ejs-layouts');
var cookies = require("cookies")


class WebSocket {

    constructor(ownerids, port, client) {
        this.ownerids = ownerids
        this.port = port
        this.client = client
        this.app = express()

        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'ejs');
        this.app.use(expressLayouts)
        this.app.use(express.static(path.join(__dirname, 'public')))
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(cookies.express(["some", "random", "keys"]))



        
        this.server = this.app.listen(port, () => {
            console.log("Der Websocket läuft auf dem Port: " + this.server.address().port)
        })
    
    }

}

module.exports = WebSocket