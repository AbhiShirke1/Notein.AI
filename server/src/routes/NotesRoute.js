const express = require('express')
const SaveController = require('../controllers/SaveController.js')
const router = express.Router();
const authen = require('../middleware/Authen.js')

router.post('/savenotes',   SaveController)


module.exports  = router