const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../config.env'})


const DB = process.env.DB;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
} ).then(()=>{
    console.log("Connection successfull");
}).catch((e)=>{
    console.log(e);
})
