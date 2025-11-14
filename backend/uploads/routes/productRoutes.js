const {newProduct,getProduct,getProducts,updateProduct,deleteProduct,getProductByCategory,getCategories} = require("../controller/productcontroller");
const {authadmin} = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = require("express").Router();



router.post("/create-product",authadmin,upload.array("images"),newProduct)
router.get("/get-products",getProducts),
router.get("/get-product/:id",getProduct)
router.put("/update-product/:id",authadmin,updateProduct)
router.delete("/delete-product/:id",authadmin,deleteProduct)
router.get("/filter-product-category/:category",getProductByCategory)
router.get("/get-categories",getCategories)





module.exports = router;