const express = require("express");
const mongoose = require("mongoose");

const person = require("./model/person")

mongoose.connect("mongodb+srv://bravin:infortechexp460@cluster0.dmw1xy6.mongodb.net/", {useNewUrlParser: true, useUnifiedTopology: true})

app = express();

app.get("/", (req, res) => {
    res.end("Welcome to my application API");
});

app.get("/api/:id",async (req, res) => {
    user_id = req.params.id;
    action = req.query.action;
    user_name = req.query.user_name;
    user_age = req.query.user_age;
    user_email = req.query.user_email;
    if( action == "create"){
        await person.create({
            _id: user_id,
            name: user_name,
            age: user_age,
            email: user_email
        }).then(() => {
            return res.status(200).send(`${action} user of ID ${user_id}`);
        }).catch((error) => {
            return res.status(500).send("Sorry the USER_ID already exists");
        });
    }
    else if( action == "delete"){
        try{
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
        person.findById(user_id).then((result)=>{
            return res.status(200).send(result)
        }).catch((error)=>{
            return res.status(500).send("Error: Sorry there was a problem reading the data.")
        });
    }
    else{
        return res.status(500).send("Error: The action is not a CRUD option");
    }
})
app.listen(5000, ()=>{
    console.log("Server listening to port 5000");
})