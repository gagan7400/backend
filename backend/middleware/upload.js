const multer = require("multer");
 
const path = require("path");
 
const uploadpath = path.join(__dirname, '../uploads')
console.log(uploadpath)
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadpath)
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})
 
const upload = multer({ storage: storage })
module.exports = upload
 