let jwt = require("jsonwebtoken");
const connectDB = require("../config/connectDb");
let { ObjectId } = require("mongodb")
let User = require("../model/usermodel")
let Admin = require("../model/adminModel")
let authadmin = async (req, res, next) => {
    try {
 
        let token = req.headers?.authorization?.split(" ")[1];;
        if (!token) {
            return res.status(500).json({ success: false, message: "token not found" })
        }
        let isvarified = await jwt.verify(token, process.env.SECRET_KEY);
        let admin = await Admin.findById(isvarified.adminId)
        if (admin) {
            req.admin = admin
            next();
        } else {
            res.status(500).json({ success: false, message: "Not valid" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
let auth = async (req, res, next) => {
    try {
 
        let token = req.headers?.authorization?.split(" ")[1];;
        if (!token) {
            return res.status(500).json({ success: false, message: "token not found" })
        }
        let isvarified = await jwt.verify(token, process.env.SECRET_KEY);
        let user = await User.findById(isvarified.user._id)
        if (user) {
            req.user = user
            next();
        } else {
            res.status(500).json({ success: false, message: "Not valid" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
module.exports = {auth,authadmin}