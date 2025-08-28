// // // const express=require("express")
// // // const app=express();
// // // const userModel=require("./models/user")
// // // const connection=require("./config/db")
// // // const morgan=require('morgan')
// // // app.set('view engine','ejs')

// // // app.use(express.json())
// // // app.use(express.urlencoded({extended:true}))
// // // app.use(express.static("public"))
// // // app.use(morgan('dev'))


// // // app.get("/",(req,res)=>{
// // //     res.render("index")
// // // })

// // // app.post("/get-form",(req,res)=>{
// // //     console.log(req.body)
// // //     res.send("data received")
// // // }
// // // )

// // // app.get("/register",(req,res)=>{
// // //     res.render('register')
// // // })

// // // app.post("/register",async (req,res)=>{
// // //     const {username,email,password}=req.body
    
// // //     await userModel.create({
// // //         username:username,
// // //         email:email,
// // //         password:password
// // //     })
// // //     res.send("user registered")
// // // })

// // // app.get("/about",(req,res)=>{
// // //     console.log("hello bandar")
// // //     res.send("hello")
// // // })

// // // app.listen(3000)


// // const express=require("express");
// // const app=express();
// // const PORT=3000;

// // app.get('/patient',(req,res)=>{
// //     const kidneyId=req.query.kidneyId;
// //     const username=req.headers.username;
// //     const password=req.headers.password;


// //     if (username!="saurabh" || password!="pass"){
// //         res.status(403).json(
// //             {msg:"user doesnt exist"}
// //         )
// //         return;
// //     }
// //     if (kidneyId!==1 && kidneyId!==2){
// //         res.status(411).json({
// //             msg:"you're not human"
// //         })
// //         return;
// //     }

// //     res.send("your kidney is healthy")
// // })



// // app.listen(PORT);


// const express=require("express");

// const app=express();
// app.use(express.json());

// app.post('/',(req,res)=>{
//     const kidneys=req.body.kidneys;
//     const kidneyLength=kidneys.length;
//     res.send("your kidney length is "+ kidneyLength)
// });

// app.listen(3000);


