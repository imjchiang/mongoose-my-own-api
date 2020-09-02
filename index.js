const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use("/coolStuff", require("./controllers/coolStuff"));

app.get("/", function(req, res)
{
    res.send("You hit the Home Page");
});

app.listen(8000, () =>
{
    console.log("Listening to port 8000");
});
