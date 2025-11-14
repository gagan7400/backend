let mongoose = require("mongoose")

let cardSchema = new mongoose.Schema({
 productId : {type: mongoose.ObjectId , ref:"products"},
 qunatity:{type:Number,default:1},
 user:{type: mongoose.ObjectId,ref:"users"}
})

cardModel = mongoose.model("carts",cardSchema);
module.exports = cardModel;