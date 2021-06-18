// Event route
const express = require('express')
const router = express.Router()

const {renderAddEventPage,extraEvent} = require('../controllers/event')
router.get('/addEvent',renderAddEventPage)


router.post('/addEvent',extraEvent)


module.exports = router