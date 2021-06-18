const mongoose = require('mongoose')
// ------Schema-------
// name
// Start of event 
// End of event
// description of event
const eventSchema = new mongoose.Schema({
    name: {
        type: String
        // required: true
    },
    startDate: {
        type: Date
        // required: true
    },
    endDate: {
        type: Date
        // required: true
    },
    description: {
        type: String
    }
},{timestamps:true})

const Event = mongoose.model('Event',eventSchema)
module.exports={Event}
