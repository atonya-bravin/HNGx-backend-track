const express = require("express");
const mongoose = require("mongoose");

const port  = process.env.PORT || 3000;

const person = require("./model/person")

app = express();

app.get("/", (req, res) => {
    res.end("Welcome to my application API");
});

app.get("/api",async (req, res) => {
    await mongoose.connect("mongodb+srv://bravin:infortechexp460@cluster0.dmw1xy6.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    user_name = req.query.user_name;
    user_age = req.query.user_age;
    user_email = req.query.user_email;
    await person.create({
        name: user_name,
        age: user_age,
        email: user_email
    }).then((results) => {
        return res.status(200).send(`User added successfully with USER_ID: ${results._id}`);
    }).catch((error) => {
        console.log(error);
        return res.status(500).send("Sorry the USER_ID already exists");
        
    });
});

app.get("/api/:id",async (req, res) => {
    await mongoose.connect("mongodb+srv://bravin:infortechexp460@cluster0.dmw1xy6.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    action = req.query.action;
    user_name = req.query.user_name;
    user_age = req.query.user_age;
    user_email = req.query.user_email;
   if( action == "delete"){
        try{
            user_id = req.params.id;
            deletedItem = await person.findByIdAndDelete(user_id);
            if(!deletedItem){
                return res.status(500).send("Error: Sorry no item with that ID");
            }
            return res.status(500).send(`Deleted user of id ${user_id} successfully`);
        }
        catch(error) {
            return res.status(500).send(`Sorry could not delete the user with id ${user_id}`);
        };
    }
    else if( action == "update"){
        try{
            user_id = req.params.id;
            updatedItem = await person.findByIdAndUpdate(user_id, {
                name: user_name,
                age: user_age,
                email: user_email
            });
            if (!updatedItem){
                return res.send(`Error: No item with the USER_ID ${user_id}`);
            }
            return res.status(500).send(`Updated user of id ${user_id} successfully`);
        }
        catch(error){
            return res.status(500).send(`Sorry could not update the user with id ${user_id}`);
        }
    }
    else if(action == "read"){
        user_id = req.params.id;
        person.findById(user_id).then((result)=>{
            return res.status(200).send(result);
        }).catch((error)=>{
            return res.status(500).send("Error: Sorry there was a problem reading the data.")
        });
    }
    else if(action == "readAll"){
        await person.find({}).then((results)=>{
            return res.status(200).send(results);
        }).catch((error)=>{
            return res.status(500).send("Error: There was an error retriving the results");
        });
        
    }
    else{
        return res.status(500).send("Error: The action is not a CRUD option");
    }
})
app.listen(`${port}`, ()=>{
    console.log(`Server listening to port ${port}`);
})