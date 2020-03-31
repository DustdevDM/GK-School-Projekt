const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    id: Number,
    date: String,
    pic: String,
    ü: String,
    prevtxt: String,
    txt: String,
    q: String
})

module.exports = mongoose.model("News", Schema)