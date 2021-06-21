const mongoose = require('mongoose')

// ------Schema-------
// name
// batch : yyyy
// area : indoor/ outdoor
// email : institute mail
// designation : student / faculty 
const coordinatorSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    batch: {
        type: Number,
        
    },
    area: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }
},{timestamps:true})

const Coordinator = mongoose.model('Coordinator',coordinatorSchema)
module.exports={Coordinator}
