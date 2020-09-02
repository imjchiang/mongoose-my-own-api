//create router
const router = require("express").Router();

//import models
const db = require("../models");

//GET /coolStuff
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

//POST /coolStuff
router.post("/", function(req, res)
{
    db.CoolStuff.create(req.body)
    .then(createdCoolStuff =>
    {
        console.log(createdCoolStuff);
        res.status(201).send(createdCoolStuff);
    })
    .catch(err =>
    {
        console.log("Error while creating CoolStuff", err)
        if (err.name === "Validation Error")
        {
            res.status(406).send({message: "Validation Error"});
        }
        else
        {
            res.status(503).send({message: "Database or server error!"});
        }
    });
});

//export these routes so the can be used in index.js
module.exports = router;