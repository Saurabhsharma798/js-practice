const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:String,
    email_id:String,
    password:String
})

const userModel = mongoose.model('user',userSchema)

module.exports = userModel