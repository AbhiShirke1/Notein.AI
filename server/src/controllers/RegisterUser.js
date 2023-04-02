const userModel = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
 
const registerUser = async(req, res)=>{
    const username = req.body.username
    const { email, password} = req.body;
    // const user = new userModel();

    try {
        if(!username || !email || !password){
            return res.json({message: "*Fill all the fields"})
        }

        const existUser = await userModel.findOne({username: username})

        if(existUser){
            return res.status(400).json({message: "User exists"})
        }

        const saveUser = new userModel(req.body);
        const user = saveUser.save();

        // const token = jwt.sign({username: saveUser.username, id: saveUser._id}, "thisisasecretkey");

        return res.status(200).json({saveUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.messgae})
    }

}

module.exports = registerUser