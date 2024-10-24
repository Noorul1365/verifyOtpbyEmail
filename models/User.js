import mongoose from "mongoose";

const userShcema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
       
    },
    password:{
        type:String,
        required:true,
       
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    //resetPasswordToken:String,
    //resetPasswordExpiresAt:Date,
    verficationCode:String,
    //verficationTokenExpiresAt:Date,
    
},{timestamps:true})

export const Usermodel=mongoose.model('User',userShcema)