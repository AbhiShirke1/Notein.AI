const userModel = require('../models/userModel.js')
const auth = require('../models/userModel.js')
const cookieParser = require('cookie-parser')

const loginUser = async(req, res)=>{
    const{username, password} = req.body;

    if(!username || !password){
        return res.json({message: "*Fill all the fields"})
    }


    try {
        const user = await userModel.findOne({username: username})

        if(user){
            if(password != user.password){
                return res.status(400).json("*Wrong password")
            }

        // const token = jwt.sign({username: user.username, id: user._id}, "thisisasecretkey");

        const token = await user.generateAuthToken();

        res.cookie("name", username)
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 25892000000),     //30days
            httpOnly: true
        })


            return res.status(200).json({user})
        }

        return res.status(404).json("*User does not exist")

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
        
    }
}

module.exports = loginUser