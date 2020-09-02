const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/myAPI",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

module.exports.CoolStuff = require("./coolStuff");