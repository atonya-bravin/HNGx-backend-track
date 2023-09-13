const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema = new Schema({
    _id: Number,
    name: String,
    age: Number,
    email: String    
})

const person = mongoose.model("person", personSchema);

module.exports = person;