// Coordinator route
const express = require('express')
const router = express.Router()

const {renderAddCoordinatorPage,extraCoordinator} = require('../controllers/coordinator')
router.get('/addCoordinator',renderAddCoordinatorPage)


router.post('/addCoordinator',extraCoordinator)


module.exports = router