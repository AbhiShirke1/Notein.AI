const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname,'..','..','.env')});

async function connectDB() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
    } ).then(()=>{
        console.log("Connection successfull");
    }).catch((e)=>{
        console.log(e);
    })
}

module.exports = {
    connectDB,
}