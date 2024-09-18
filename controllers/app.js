var User = require('../models/User');

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

module.exports = { register };