// Event route
const express = require('express')
const router = express.Router()

const {renderAddEventPage,extraEvent} = require('../controllers/event')
const { isLoggedIn } = require('../middleware/authMiddleware')

/*----------------------
  GET ROUTES
------------------------*/
router.get('/addEvent',[isLoggedIn],renderAddEventPage)

/*----------------------
  POST ROUTES
------------------------*/
router.post('/addEvent',extraEvent)


module.exports = router