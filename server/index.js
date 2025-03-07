const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require("./models/Employee")

const app= express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://kaarthik2474:<password>@cluster0.ydqw4.mongodb.net/");

app.post("/login", (req,res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if (user) { 
            if (user.password === password) {
                res.json("success"); 
            } 
            else {
                res.json("password is incorrect");
            }}
        else { 
            res.json("No record exists");
        }
    })
    
})

app.post('/register', (req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log("Server is running")
})