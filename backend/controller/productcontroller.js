const Product = require("../model/productModel")

const newProduct = async (req, res) => {
    try {
        let { name, price, review, category, stock ,rating,discount} = req.body;
        console.log(req.body);
        if (!name || !price || !category || !review || !stock || !rating  || !discount) {
            return res.status(500).json({ success: false, message: "provide all the details" })
        }
        let images = []
        if (req.files) {
            req.files.map((v) => {
                images.push({ fileName: v.filename, url: "http://localhost:4000/uploads/" + v.filename })
            })
        }
        let newProduct = await Product.create({ name, price, category, stock, images ,review ,rating,discount});

        res.status(200).json({ success: true, message: "Product Create Successfully", data: newProduct })


    } catch (error) {
        res.status(500).json({ success: false, message: error.message })

    }
}
 
const getProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "product not found" })
        } else {
            res.status(200).json({ success: true, data: product })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })

    }


}

const getProducts = async (req, res) => {
    try {
        let product = await Product.find({})
        res.status(200).json({ success: true, data: product })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })

    }
}
const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" })
        } else {
            await Product.findByIdAndUpdate(id, { ...req.body })
            res.status(200).send({ success: true, message: "Product Updated Successfully",data:product })
        }
    } catch (error) {

        res.status(500).json({ success: false, message: error.message })
    }
}
const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id) 
        if (!product) {
            return res.status(404).json({ success: false, message: "product not found" })
        } else {
            await Product.findByIdAndDelete(id)

            res.status(200).send({ success: true, message: "Product deleted Successfully" })


        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}
const getProductByCategory = async (req, res) => {
    try {
        let {category} = req.params;
        let products = await Product.find({category})
         res.status(200).send({ success: true, message: "Product Get Successfully", data: products })
 
    } catch (error) {
       res.status(500).json({ success: false, message: error.message })
    }
}

const getCategories = async (req, res) => {
    try {
        let productcategory = await Product.find({}).distinct("category")
        res.status(200).send({ success: true, message: "Categories Get Successfully", data: productcategory })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })

    } 
      
}

 
module.exports = { newProduct, getProduct, getProducts, updateProduct, deleteProduct, getProductByCategory, getCategories }