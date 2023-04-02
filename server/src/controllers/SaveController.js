const userModel = require('../models/userModel.js')
const cookieParser = require('cookie-parser')
const authen = require('../middleware/Authen.js')

const saveNotes = async(req, res, )=>{ 
   
    const fileName = req.body.fileName;
    const folderName = req.body.folderName
    const content = req.body.content;
    try {
        // const name = req.cookies.name;
        const name = "siraj";
        if(name){
            // const user = await userModel({username: name});
            // console.log(user);

            // await user.updateOne({username: name}, {$push: {folderName: folderName}})
            // await user.updateOne({username: name}, {$push: {content}})
            // return res.status(200).json("File saved");

            // await user.updateOne({username: name}, {})

            await userModel.updateOne({username: name}, {$push: {"notes.$[elem].files": {name: fileName, content: content, favourites: false}}}, {arrayFilters: [{"elem.folderName": folderName}]})

            return res.send("done")
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