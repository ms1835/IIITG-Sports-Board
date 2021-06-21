const {Event} = require('../models/event')
const {Coordinator} = require('../models/coordinator')

const displayEvents = async(req,res)=>{
    try{
        const renderHomePage = async(req,res)=>{
            try{
                res.render('home')
            }catch(err){
                console.log(err)
            }
        }
        const foundEvents = await Event.find()
        console.log(foundEvents)
        res.render('home',{newEvents:foundEvents})
    }catch(err){
        console.log(err)
    }
}
const renderEventPage = async(req,res)=>{
    try{
        res.render('events')
    }catch(err){
        console.log(err)
    }
}
const displayCoordinators = async(req,res)=>{
    try{
        const renderContactPage = async(req,res)=>{
            try{
                res.render('contact')
            }catch(err){
                console.log(err)
            }
        }
        const foundCoordinators = await Coordinator.find()
        console.log(foundCoordinators)
        res.render('contact',{newCoordinators:foundCoordinators})
    }catch(err){
        console.log(err)
    }
}

const renderCricketPage = async(req,res)=>{
    try{
        res.render('cricket')
    }catch(err){
        console.log(err)
    }
}
const renderFootballPage = async(req,res)=>{
    try{
        res.render('football')
    }catch(err){
        console.log(err)
    }
}
const renderVolleyballPage = async(req,res)=>{
    try{
        res.render('volleyball')
    }catch(err){
        console.log(err)
    }
}
const renderAthleticsPage = async(req,res)=>{
    try{
        res.render('athletics')
    }catch(err){
        console.log(err)
    }
}
const renderChessPage = async(req,res)=>{
    try{
        res.render('chess')
    }catch(err){
        console.log(err)
    }
}
const renderCarromPage = async(req,res)=>{
    try{
        res.render('carrom')
    }catch(err){
        console.log(err)
    }
}
const renderTableTennisPage = async(req,res)=>{
    try{
        res.render('tableTennis')
    }catch(err){
        console.log(err)
    }
}
const renderBadmintonPage = async(req,res)=>{
    try{
        res.render('badminton')
    }catch(err){
        console.log(err)
    }
}

module.exports={renderEventPage,renderCricketPage,renderFootballPage,
                renderVolleyballPage,renderAthleticsPage,renderChessPage,renderCarromPage,
                renderTableTennisPage,renderBadmintonPage,displayEvents,displayCoordinators}