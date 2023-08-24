const usermodel=require('../modules/usermodel.cjs')
const express=require ('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



exports.Register=async function (req,res) 
{
try{

    let reg= new usermodel(req.body)
    console.log(reg);
    const hashedpassowred= await bcrypt.hash(reg.password,10)
    console.log(hashedpassowred)
    reg.password=hashedpassowred
    let user= await reg.save()
    return res.status(200).json({"message":"User registered successfully",user:{name:user.name,email:user.email,id:user._id}})

}catch(err){
    console.log(err)
}
}
exports.login=async function (req,res)
{
    try{

        let user = await usermodel.findOne({email:req.body.email}) 
         if(!user || !user.comparepassword(req.body.password)){
             return res.status(401).json({"message":"Invalid email or password"})
         }
        console.log(user)
        const token =jwt.sign({name:user.name,email:user.email,id:user._id,role:user.role},'securitykey')
        return res.json({"message":"logged in succesfully",user:{name:user.name,email:user.email,id:user._id,token:token}})


    }catch(err){
        console.log(err)
    }
    

}
