var mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    select: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    cut: {
        type: Number,
        default: 0
    },
    quantity: {
        type: String,
        require: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;