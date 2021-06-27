// Event controller
const {Event} = require('../models/event')

const renderAddEventPage = async(req,res)=>{
    try{
        res.render('addEvent')
    }catch(err){
        console.log(err)
    }
}
const extraEvent = async(req,res)=>{
    try{
        // console.log(req.body)
        const newEvent={
            name: req.body.name,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            description: req.body.description
        }
        // console.log(newEvent)

        const event = new Event(newEvent)
        await event.save()
        res.redirect('/')
    }catch(err){
        console.log(err)

    }
}



module.exports={renderAddEventPage,extraEvent}