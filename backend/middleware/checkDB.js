import connectDB from "../config/db.js";

const conn = await connectDB();
export const middlewareCheckDB = (req,res,next)=>{
    if(conn)
        next();
    else 
        res.json({'msg':'Database server is not available'})

}