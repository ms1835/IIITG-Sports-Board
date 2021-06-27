const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true})

// Authenticate by password
userSchema.methods={
    authenticate: function (plainpassword){
        const isValidPass = bcrypt.compareSync(plainpassword,this.password)
        console.log(isValidPass)
        if(isValidPass){
            return true
        }else{
            return false
        }
    }
}

const User = mongoose.model('User',userSchema)
module.exports={User}