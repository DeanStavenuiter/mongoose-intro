const { Schema, model } = require("mongoose");

//create a schema 
const dinoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    friends: [String],
    meatEater: Boolean,
    legs: Number,
    longnack: Boolean,
    color: {
        type: String,
        enum: ['red', 'blue', 'green'],
    }
});

//first argument is name of collection and second argument is name of schema
const DinoModel = model('dino', dinoSchema); 
// exports the model
module.exports = DinoModel
