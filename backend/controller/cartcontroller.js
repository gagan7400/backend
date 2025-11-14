let Cart = require("../model/cartModel");
const Product = require("../model/productModel");
let addToCart = async (req, res) => {
    try {
        let { productId, quantity } = req.body;
        console.log(req.user)
        let product = await Product.findById(productId);
        if (!product) {
            return res.status(400).json({ success: false, message: "product not found" })
        } else {
            if (product.stock >= quantity) {

                let newCart = await Cart.create({ productId, quantity, user: req.user._id });
                res.status(200).json({ success: true, message: "Product added successfully" })
            } else {
                return res.status(400).json({ success: false, message: `only ${product.stock} products are available` })
            }
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
let getCart = async (req, res) => {
    try {
        let all = await Cart.find({});
        res.status(200).json({ success: true, data: all })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
let updateCart = async (req, res) => {
    try {
        let {id} = req.params;
        let cart = await Cart.findById(id)
          if (!cart) {
            return res.status(404).json({ success: false, message: "cart not found" })
        } else {
            await Cart.findByIdAndUpdate(id, { ...req.body })
            res.status(200).send({ success: true, message: "cart Updated Successfully",})
        }
    
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
let deleteCart = async (req, res) => {
    try {
      let {id} = req.params;
      let cart = await Cart.findById(id);
      if(!cart){
        return res.status(404).json({success:false,message:"cart not found"})
      }else{
         await Cart.findByIdAndDelete(id)
         res.status(200).json({success:true,message:"cart deleted successfully"})
      }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { addToCart, getCart, updateCart, deleteCart }