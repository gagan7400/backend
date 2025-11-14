const { registerAdmin,getAdminData,loginAdmin } = require("../controller/admincontroller");
let {authadmin, auth} = require('../middleware/auth')
let router = require("express").Router();



router.post("/registerAdmin",registerAdmin)
router.get("/getAdmin",getAdminData),
router.post("/loginAdmin",loginAdmin)

module.exports = router;