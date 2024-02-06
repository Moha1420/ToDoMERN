const adminValidator=(req,res,next)=>{
    if(req.user.role==="admin"){

       next()

    } else{

      

    }
}