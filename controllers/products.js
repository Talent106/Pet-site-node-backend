var Product = require('../models/Product');

const addProduct = async (req, res) => {

    try {
        const newProduct = new Product({ ...req.body });
    
        const exist = Product.findOne({
            select: req.body.select,
            title: req.body.title
        });
    
        if (!exist) {
            await newProduct.save()
            const products = await Product.find();
            res.status(200).json({
                success: true,
                message: "Successful!",
                data: products
            });
        } else {
            res.status(200).json({
                success: false,
                message: "Already Added!"
            });
        }
    } catch (err) {
        res.status(500).json({ err });
    }
}

module.exports = { addProduct };