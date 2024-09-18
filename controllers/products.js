var Product = require('../models/Product');

const addProduct = async (req, res) => {

    try {
        const exist = await Product.findOne({
            select: req.body.select,
            title: req.body.title
        });
    
        if (!exist) {
            const newProduct = new Product({ ...req.body });

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