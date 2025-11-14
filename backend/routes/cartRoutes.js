const { addToCart, getCart, updateCart, deleteCart } = require("../controller/cartcontroller");
const { auth } = require("../middleware/auth");

const router = require("express").Router();


router.post("/addtocart", auth, addToCart)
router.put("/update-card/:id", auth, updateCart)
router.delete("/delete-card/:id", auth, deleteCart)
router.get("/getcart", auth, getCart)

module.exports = router