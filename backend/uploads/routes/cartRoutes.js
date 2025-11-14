const {addToCart,getCart,updateCart,deleteCart} = require("../controller/cartcontroller.js");
const {auth} = require("../middleware/auth");

const router = require("express").Router();



router.post("/addtocart",auth,addToCart);
router.get("/getcart",auth,getCart);
router.put("/updatecart/:id",auth,updateCart);
router.delete("/deletecart/:id",auth,deleteCart); 





module.exports = router; 