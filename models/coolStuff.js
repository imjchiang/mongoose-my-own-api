const mongoose = require("mongoose");

let coolStuffSchema = new mongoose.Schema(
{
    name: 
    {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    owner: 
    {
        type: String,
        required: true
    },
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