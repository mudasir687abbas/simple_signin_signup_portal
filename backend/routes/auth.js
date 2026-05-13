import express from 'express';
import {user} from '../models/User.js';
import jwt from 'jsonwebtoken';
const router = express.Router();
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

router.post('/register', async (req,res)=>{
    let {name,email,password} = req.body;
    // const savedUser = await user.create({name,email,password});
    try{
        let isExistsEmail = await user.findOne({email});
        if(isExistsEmail){
          res.json({success:false,message:'Email already exist'});
          return;

        }
        let savedUser = await user.create({name,email,password});
        let token = generateToken(savedUser._id);
        res.json({success:true,message:"User is registered",data:savedUser,token});
    }catch(e){
        res.status(500).json({success:false,message:'Server Error'});
    }
    //

    
});

router.post('/login', async (req,res)=>{
    let {email,password} = req.body;
    // const savedUser = await user.create({name,email,password});
    try{
        let isEmail = await user.findOne({email}).select('+password');
        if(!email){
          res.json({success:false,message:'Email do not exist'});
          return;

        }
        if(password != isEmail.password){
           res.json({success:false,message:'Password is incorrect'});
           return;
        }
        let token = generateToken(isEmail._id);
        res.json({success:true,message:"User is authorized",id:isEmail._id,name:isEmail.name,email:isEmail.email,token});
    }catch(e){
        res.status(500).json({message:'Server Error'});
    }
  });

export default router;


