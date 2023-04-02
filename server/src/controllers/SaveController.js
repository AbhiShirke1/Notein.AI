const userModel = require('../models/userModel.js')
const cookieParser = require('cookie-parser')
const authen = require('../middleware/Authen.js')

const saveNotes = async(req, res, )=>{ 
    console.log("hi")
    const fileName = req.body.fileName;
    const content = req.body.content;
    try {
        const name = req.cookies.name;

        if(name){
            const user = await userModel({username: name});

            await user.updateOne({username: name}, {$push: {fileName}})
            await user.updateOne({username: name}, {$push: {content}})
            return res.status(200).json("File saved");
        }

        else{
            console.log("user not");
            return res.status(404).json("User not found")
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = saveNotes