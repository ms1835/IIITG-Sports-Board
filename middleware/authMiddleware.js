exports.isLoggedIn = async(req,res,next) => {
    try{
        if(req?.session?.isLoggedIn){
            next()
        }else{
            req.flash('error','You are not logged in.')
            res.redirect('/auth/login')
        }
    }catch(err){
        console.log(err)
        res.redirect('/error')
    }
}