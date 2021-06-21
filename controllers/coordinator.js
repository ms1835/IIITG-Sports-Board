const {Coordinator} = require('../models/coordinator')

const renderAddCoordinatorPage = async(req,res)=>{
    try{
        res.render('addCoordinator')
    }catch(err){
        console.log(err)
    }
}
const extraCoordinator = async(req,res)=>{
    try{
        // console.log(req.body)
        const newCoordinator={
            name: req.body.name,
            email: req.body.email,
            batch: req.body.batch,
            area: req.body.area,
            designation: req.body.designation,
            filePath: req.file.path,
            fileType: req.file.mimetype
        }
        // console.log(newCoordinator)
        console.log(req.body)
        console.log(req.file)

        const coordinator = new Coordinator(newCoordinator)
        await coordinator.save()
        res.redirect('/contact')
    }catch(err){
        console.log(err)

    }
}



module.exports={renderAddCoordinatorPage,extraCoordinator}