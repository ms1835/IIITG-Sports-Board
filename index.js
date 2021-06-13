const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/public',express.static('public'))

// routes
app.get("/",(req,res)=>{
	//res.send("Getting home page")
	try{
		res.render('home')
	}catch(err){
		console.log(err)
	}
	
})

app.get("/event",(req,res)=>{
	try{
		res.render('event')
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
app.get("/cricket",(req,res)=>{
	try{
		res.render('cricket')
	}catch(err){
		console.log(err)
	}
})
app.get("/football",(req,res)=>{
	try{
		res.render('football')
	}catch(err){
		console.log(err)
	}
})
app.get("/volleyball",(req,res)=>{
	try{
		res.render('volleyball')
	}catch(err){
		console.log(err)
	}
})
app.get("/athletics",(req,res)=>{
	try{
		res.render('athletics')
	}catch(err){
		console.log(err)
	}
})
app.get("/chess",(req,res)=>{
	try{
		res.render('chess')
	}catch(err){
		console.log(err)
	}
})
app.get("/carrom",(req,res)=>{
	try{
		res.render('carrom')
	}catch(err){
		console.log(err)
	}
})
app.get("/badminton",(req,res)=>{
	try{
		res.render('badminton')
	}catch(err){
		console.log(err)
	}
})
app.get("/tableTennis",(req,res)=>{
	try{
		res.render('tableTennis')
	}catch(err){
		console.log(err)
	}
})

app.get("*",(req,res)=>{
	res.send("Error")
})
const PORT = 3300
app.listen(PORT,()=>{
	console.log("Server has started at port",PORT)
})