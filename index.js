const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))

app.get("/",(req,res)=>{
	//res.send("Getting home page")
	try{
		res.render('home')
	}catch(err){
		console.log(err)
	}
	
})

app.get("/events",(req,res)=>{
	try{
		res.render('events')
	}catch(err){
		console.log(err)
	}
})

app.get("/contact",(req,res)=>{
	try{
		res.render('contact')
	}catch(err){
		console.log(err)
	}
})

app.get("*",(req,res)=>{
	res.send("Error")
})

app.listen(3300,()=>{
	console.log("Server has started at port.")
})