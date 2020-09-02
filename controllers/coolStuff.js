//create router
const router = require("express").Router();

//import models
const db = require("../models");

//GET /bounties
router.get("/", function(req, res)
{
    db.CoolStuff.find()
    .then(foundStuff =>
    {
        console.log(foundStuff);
        res.send(foundStuff);
    })
    .catch(err =>
    {
        console.log(err);
        res.status(503).send({message: "Database unavailable"});
    });
});

//export these routes so the can be used in index.js
module.exports = router;