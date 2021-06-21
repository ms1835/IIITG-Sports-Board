// Coordinator route
const express = require('express')
const router = express.Router()
const multer = require('multer')

const {renderAddCoordinatorPage,extraCoordinator} = require('../controllers/coordinator')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,'uploads')
    },
    filename: function(req,file,cb){
      cb(null,`${file.originalname}_${Date.now()}`)
    },
    // Optional
    // fileFilter: function(req,file,cb){
  
    // }
  })
  const upload = multer({storage: storage}).single('image')

/*----------------------
  GET ROUTES
------------------------*/
router.get('/addCoordinator',renderAddCoordinatorPage)
/*----------------------
  POST ROUTES
------------------------*/
router.post('/addCoordinator',[upload],extraCoordinator)


module.exports = router