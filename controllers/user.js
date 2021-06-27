// User controller
const {User} = require('../models/user')
const {Coordinator} = require('../models/coordinator')
const bcrypt = require('bcrypt')

const renderLoginPage = async(req,res) => {
    try{
        res.render('login')
    }catch(err){
        console.log(err)
    }
}

const loginUser = async(req,res) => {
    try{
        const found = await Coordinator.findOne({email: req.body.email})
        if(!found){
            console.log('Invalid password or coordinator doesn\'t exist')
            res.redirect('/error')
            return
        }
        // console.log(foundUser)
        const foundUser = await User.findOne({email: found.email})
        if((!foundUser)||!(foundUser.authenticate(req.body.password))){
            console.log('Invalid password or user doesn\'t exist')
            res.redirect('/error')
        }
        else{
            console.log('You are logged in')
            req.session.isLoggedIn = true
            req.session.user = foundUser
            req.flash('success','You are logged in.')
            res.redirect('/')
        }
    }catch(err){
        console.log(err)
    }
}

const logout = async(req,res) => {
    if(req.session){
        req.session.destroy((err) => {
            if(err){
                console.log(err)
                res.redirect('/error')
            }else{
                req.session = null
                res.redirect('/')
            }
        })
    }
}

const renderSignUpPage = async(req,res) => {
    try{
        res.render('signUp')
    }catch(err){
        console.log(err)
        res.redirect('/error')
    }
}

const signupUser = async(req,res) => {
    try{
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        const salt = bcrypt.genSaltSync(10)
        newUser.password = bcrypt.hashSync(newUser.password,salt)
        const user = new User(newUser)
        await user.save()
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.redirect('/error')
    }
}

module.exports={renderLoginPage,loginUser,logout,renderSignUpPage,signupUser}