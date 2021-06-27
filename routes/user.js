// User routes
const express = require('express')
const router = express.Router()
const {renderLoginPage,loginUser,logout,renderSignUpPage, signupUser} = require('../controllers/user')
const { isLoggedIn } = require('../middleware/authMiddleware')

/*----------------------
  GET ROUTES
------------------------*/
router.get('/login',renderLoginPage)
router.get('/signUp',renderSignUpPage)
router.get('/logout',[isLoggedIn],logout)

/*----------------------
  POST ROUTES
------------------------*/
router.post('/login',loginUser)
router.post('/signUp',signupUser)

module.exports=router