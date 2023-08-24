const express=require("express")
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const router =require('./router/router.cjs') 
const bodyParser= require('body-parser')
// require("dotenv").config();


const app =express()
app.use(bodyParser.json())
const url = "mongodb+srv://project1:project294174@project1.srlg0qu.mongodb.net/project";
const connectDB= async()=>{
   try{ 
      mongoose.set('strictQuery',false)
      mongoose.connect(url)
      console.log("connect accomplished")
   }
   catch(error){
      console.log('there are an error as follow:'+error)
      process.exit()
   }        
}  

   
connectDB()

app.use('/',router)//هنا عشان اي طلب يجي عالسيرفير يتحول يوسر راوتر اللي هو فيه الاتنين بوست 
app.listen(8080,()=>{
   console.log("we are listining at port 8080") 
})