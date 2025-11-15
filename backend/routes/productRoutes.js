const { newProduct, getProduct, getProducts, updateProduct, deleteProduct, getProductByCategory, getCategories } = require("../controller/productcontroller");
const upload = require("../middleware/upload");

const router = require("express").Router();


router.post("/createproduct",upload.array("images",10), newProduct)
router.get("/get-products", getProducts)
router.get("/get-product/:id", getProduct)
router.put("/update-product/:id", updateProduct)
router.delete("/delete-product/:id", deleteProduct)
router.get("/filter-product-category/:category", getProductByCategory)
router.get("/getcategories", getCategories)

module.exports = router