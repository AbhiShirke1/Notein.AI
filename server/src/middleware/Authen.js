const jwt = require('jsonwebtoken')
const LoginUser = require('../controllers/LoginUser')
const userModel = require('../models/userModel.js')

const authen = async(req, res, next)=>{

    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
    
        const user = await userModel.findOne({_id: verifyUser._id})
        next(); 
    } catch (error) {
        res.status(401).redirect('/auth/login')

    }
    
}

module.exports = authen