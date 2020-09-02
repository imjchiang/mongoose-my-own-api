const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/myAPI",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () =>
{
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`);
});

db.on("error", err =>
{
    console.log(`Database error:\n${err}`);
});

module.exports.CoolStuff = require("./coolStuff");