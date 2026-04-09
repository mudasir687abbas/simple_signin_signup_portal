
export const middlewareError = (err,req,res,next)=>{
    console.log(err)
    res.json({success:false,msg:err});

}