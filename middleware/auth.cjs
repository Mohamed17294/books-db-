const jwt = require('jsonwebtoken')
const express = require('express')

module.exports=  async (req ,res , next)=>{
    try{ 
    const fulltoken = req.headers.authorization
    console.log(fulltoken)
    const token = fulltoken?.split(' ')[1]
    if(!token){return res.status(403).json({"message":"access denied"})}
    else{
    let check = jwt.verify(token,'securitykey')
    req.User = check
    next()
    }
}
catch(error){
        res.send(error)
        // res.status(400).send("invalid jwt")
    }
}