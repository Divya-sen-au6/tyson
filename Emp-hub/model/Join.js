const mongoose = require('mongoose');

const schema = mongoose.Schema

const userSchema = new schema({
    company_name:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const Join = mongoose.model('join', userSchema)

module.exports=Join;