const express = require('express')
const app = express()
const mongoose = require('mongoose').set('debug',true)
const dotenv = require('dotenv')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
dotenv.config()

// Database connetion
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
	console.log("Connected to database.")
}).catch((err)=>{
	console.log("Something went wrong.")
	console.log(err)
})

app.set("view engine","ejs")
// Middleware functions
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(flash())
app.use(session({
	resave:false,
	saveUninitialized:false,
	secret: process.env.sessionSecret

}))

// Custom middleware
app.use(function(req,res,next){
	if(req.session.isLoggedIn){
		res.locals.currentUser = req.session.user
	}else{
		res.locals.currentUser = null
	}
	res.locals.error = req.flash('error')
	res.locals.success = req.flash('success')
	next()
})

app.use('/public',express.static('public'))
app.use('/uploads',express.static('uploads'))

// routes
const landingRoutes = require('./routes/landing')
const eventRoutes = require('./routes/event')
const coordinatorRoutes = require('./routes/coordinator')
const userRoutes = require('./routes/user')

app.use('/',landingRoutes)
app.use('/new',eventRoutes)
app.use('/add',coordinatorRoutes)
app.use('/auth',userRoutes)


app.get('/error',(req,res) => {
	try{
		res.render('error')
	}catch(err){
		console.log(err)
	}
})
// Rest routes (undefined)
app.get("*",(req,res)=>{
	res.send("Error")
})

app.listen(process.env.PORT,()=>{
	console.log("Server has started at port",process.env.PORT)
})