const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    name: String,
    age: Number,
    email: String    
})

const person = mongoose.model("person", personSchema);

module.exports = person;