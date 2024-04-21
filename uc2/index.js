const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
const schema=mongoose.Schema
const productschema=new schema({
    name:{
        type:String,
        required: true
    },
    imgsrc:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const productmodel=mongoose.model('products',productschema)

