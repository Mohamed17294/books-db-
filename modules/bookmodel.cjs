const mongoose = require('mongoose')


const schema = mongoose.Schema
const bookSchema=new schema( {
    name:String,
    type:{type : String , unique : true},
    category:String,
    author:{type:String , unique:true }

})

module.exports = mongoose.model('books',bookSchema);
