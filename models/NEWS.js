const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    id: Number,
    date: String,
    pic: String,
    t: String,
    prevtxt: String,
    txt: String,
    q: String
})

module.exports = mongoose.model("News", Schema)