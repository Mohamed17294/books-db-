const bookmodel=require('../modules/bookmodel.cjs')
const express=require ('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const CircularJSON = require('circular-json');


exports.findBookByCategory= async function(req, res){

    try{
        const categori = req.params.category; 
        // // console .log(category)
         var cat = categori.split(':')[1]
        // console.log(cat)
        const book = await bookmodel.findOne({category:cat})  
        return res.json({"message":" pleasury found your request:",book:book})
    }
    
    catch(error){
        res.send(`the error found as follow:${error}`)
    }
    
}


exports.searchbyname= async function(req,res){
    
    try{
            const names = req.params.name; 
            // // console .log()
             var cat = names.split(':')[1]//(split : from the req.params.name)
            // console.log(cat)
            const book = await bookmodel.findOne({name:cat})  
            return res.json({"message":" pleasury found your request:",book:book})
    }catch(error){
            res.send(`the error found as follow:${error}`)
    }
}
 
exports.searchbyauthor = async (req,res)=>{
    try{
        const authors = req.params.name; 
        // // console .log()
        var cat = authors.split(':')[1]//(split : from the req.params.name)
        // console.log(cat)
        const book = await bookmodel.findOne({author:cat})  
        return res.json({"message":" pleasury found your request:",book:book})
}catch(error){
        res.send(`the error found as follow:${error}`)
}
}

exports.addnewbook =  async (req,res)=>{
 

    try{
        if(req.User.role === "User"){
        const newbook = new bookmodel(req.body)
        const b1 = await newbook.save()
        console.log('this is the data',b1);
        res.json({"message":"done",newbook:b1})}
        else{
            res.send("you don't have the right permission")
        }
        
    }catch(error){
        res.send("error found"+ error)
}

    next()

}
exports.searchbyid = async function(req,res,next){
    try{
        const id = req.params._id
        let book = await bookmodel.find({_id:id})
        return res.json({"message":"the book required",data:book})
    }catch(error){
        res.send("error found "+ error )
    }
    next()
   
}
exports.updatedate = async function( req , res ,next ){
    
    try { 
        const updated = await bookmodel.findByIdAndUpdate(req.body._id)
        return res.json({"message":"updated succesfuly",book:{updated}})
        
}catch(error){
    res.status(403).json({"error is":error})
}
 next()
}

exports.deletebook = function(req , res ){
    try{
        deletedbook = bookmodel.findByIdAndUpdate(req.params._id)
         return res.json({"message":"deleted succesfuly",deletedbook:[]})
    }catch(error){
        res.status(403).json({"error is":error})
    }
} 

exports.getall = (req, res )=>{
    try{
        const allbook = bookmodel.find()
        return res.status(200).json({"message":"alldata",books:[allbook]})
    }catch(error){

        res.status(403).json({"error is":error})

    }
}

















