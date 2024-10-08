const express = require("express");
const mongoose= require('mongoose')
const cors = require('cors');

// Use CORS middleware


require("./config/config.js")

const User=require("./model/User.js")
const app =express();

app.use(cors());

app.use(express.json());


app.post('/register', async (req,res)=>{
    const {name,email,password}=req.body;
    // const newuser=await User.create(name,email,password);
    
    let user =new User(req.body);
    const result=await user.save();
   
    res.send(result);
})



app.listen(5000)