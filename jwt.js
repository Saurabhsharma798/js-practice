const express = require("express");
const jwt=require('jsonwebtoken');
const jwt_password="123456";


const app=express();
app.use(express.json());

const users=[
    {
        username:"saurabh",
        password:"123"
    },
    {
        username:"aliza",
        password:"1122"
    },
    {
        username:"sara",
        password:"1313"
    },
];


function userExists(username,password){
   return users.some(user=>user.username==username && user.password==password)
}

app.get("/users",(req,res)=>{
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwt_password);
        const username=decoded.username;
        return res.json({users})
    }
    catch(err){
        return res.status(403).json({
            msg:"invalid token",
        })
    }
    
})

app.post("/signin",(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    if(!userExists(username,password)){
        return res.status(400).json({msg:"user not found"})
    }
    var token=jwt.sign({username:username},jwt_password)
    return res.status(200).json({token})
})


app.listen(3000);