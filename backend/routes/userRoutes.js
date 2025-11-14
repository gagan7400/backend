const { getUsers, registerUser, login, verifyUser, deletedata } = require("../controller/usercontroller");

const router = require("express").Router();


router.post("/register", registerUser)
router.post("/login", login)
router.post("/verify-user", verifyUser)
router.delete("/deleteuser/:id", deletedata)
router.get("/allusers", getUsers)

module.exports = router