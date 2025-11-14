const mongoose = require("mongoose")

let connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DATABASE Connected successfully");
    }).catch((err) => {
        console.log(err.message)
    })
}
module.exports = connectDb ; 