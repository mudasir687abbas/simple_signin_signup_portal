import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:[true, 'Name is required'],
        trim:true,
        // unigque:true,
        minlength: [3, 'Name must be at least 3 characters'],
        lowercase:true

    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        // unigque:true,
        lowercase:true,
        trim:true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']

    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password in queries by default
    }
});

export const user = mongoose.model('User', userSchema);