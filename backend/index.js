import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js';
import register from './routes/auth.js';
import { middlewareCheckDB } from './middleware/checkDB.js';
import { middlewareError } from './middleware/middlewareError.js';
const app = express();


// app.use(cors({ origin: 'http://localhost:5173'}));
app.use(express.json());


app.use('/api/auth',middlewareCheckDB,register);

app.get('/',(req,res)=>{
    res.json({msg:"Server is running on port#5000"});
 });
 
app.use(middlewareError);
app.use((req,res)=>{
   res.status(404).json({success:false,msg:'API not found'});
})
 app.listen(5000,async ()=>{
    console.log('Server is running on 5000')
 })
