var User = require('../models/User');
var Products = require('../models/Product');

const getData = async (req, res) => {
    try {
        const products = await Products.find();
        if (products.length === 0) {
            res.status(200).json({
                success: false,
                message: "There is no data.",
                data: []
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Successful!",
                data: products
            });
        }
    } catch (err) {
        res.status(500).json({ err })
    }
}

const register = (req, res) => {
    const newUser = new User({ ...req.body });

    User.findOne({ email: req.body.email }).then(exist => {
        if (!exist) {
            newUser.save()
            .then(result => {
                res.status(200).json({
                    success: true,
                    message: 'Successful!'
                });
            })
            .catch(err => {
                res.status(200).json({
                    success: false,
                    msg: 'You already joined here.'
                });
            })
        } else {
            res.status(200).json({
                success: false,
                message: 'Already exists'
            });
        }
    })
    .catch(err => {
        res.status(500).json({ err });
    })
};

module.exports = { register, getData };