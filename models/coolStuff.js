const mongoose = require("mongoose");

let ownerSchema = new mongoose.Schema(
{
    name:
    {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    netWorth:
    {
        type: Number,
        default: 100
    }
});

let coolStuffSchema = new mongoose.Schema(
{
    name: 
    {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    owner: {ownerSchema},
    value:
    {
        type: Number,
        default: 100
    },
    damaged: 
    {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("CoolStuff", coolStuffSchema);