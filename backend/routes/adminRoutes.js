const { getAdminData, registerAdmin, loginAdmin, getAdminProfile } = require("../controller/admincontroller");

const router = require("express").Router();


router.post("/register", registerAdmin)
router.post("/login", loginAdmin)
router.get("/profile", getAdminProfile)


module.exports = router