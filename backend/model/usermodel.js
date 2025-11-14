const mongoose = require("mongoose")

let userSchema = new mongoose.Schema({
    name: { type: String, min: 3, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, min: 5, required: true, trim: true },
    MoblieNumber:Number,
    image: { filename: String, path: String },
    role: { type: String, default: "user" },
    varificationOTP:{type:Number},
    varificationExpire : {type:Date,default:Date.now()},
    isActive:{type:Boolean,default:false},
    address:[{
        name:String,
        houseNo:String,
        city:String,
        district:String,
        pinCode:Number,
        MoblieNumber:Number,
        isActive:Boolean
    }]
})

let userModel = mongoose.model("users", userSchema);
module.exports = userModel;