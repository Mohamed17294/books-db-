const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = mongoose.Schema
const userSchema=new schema( {
    name:String,
    email:{type : String , unique : true},
    password:String,
    phone:{type:String , unique:true },
    role:String

})
userSchema.methods.comparepassword=async function (password){
    return await bcrypt.compare(password,this.password)
}
module.exports = mongoose.model('users',userSchema);
