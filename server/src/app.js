const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const authen = require('./middleware/Authen.js')
const SaveController = require('./controllers/SaveController.js')
require('./db/conn.js')
dotenv.config({ path: '../config.env' })

const app = express();

//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//routes
const FirstRoute = require('./routes/FirstRoute.js')
const NotesRoute = require('./routes/NotesRoute.js')

app.use('/auth',  FirstRoute);
app.use('/notes', NotesRoute);

app.listen(6000, ()=>{
    console.log("Connection is running");
})

