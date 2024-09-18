var Product = require('../models/Product');

const addProduct = (req, res) => {
    const newProduct = new Product({ ...req.body });

    Product.findOne({
        select: req.body.select,
        title: req.body.title
    }).then(exists => {
        if (!exists) {
            newProduct.save()
            .then(results => {
                res.status(200).json({
                    success: true,
                    message: "Successful!"
                });
            })
            .catch(err => {
                res.status(200).json({
                    success: false,
                    message: "Already existed"
                });
            });
        } else {
            res.status(200).json({
                success: false,
                message: 'Already exists'
            });
        }
    })
    .catch(err => {
        res.status(500).json({ err });
    });
}

module.exports = { addProduct };