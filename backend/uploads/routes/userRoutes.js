const { getdata, registerUser, login, verifyUser, deletedata } = require("../controller/usercontroller");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = require("express").Router();

 
 
router.get("/getusers", getdata)
router.post("/register", upload.single("image"), registerUser)
router.post("/verify-user", verifyUser)
router.post("/login", login)
router.delete("/deleteuser/:id", deletedata)

module.exports = router  