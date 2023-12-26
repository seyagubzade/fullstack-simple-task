const mongoose = require("mongoose");

const Product = mongoose.model('Product', new mongoose.Schema({
    title: String,
    price: Number,
    desc: String,
    image: String,
    isOnSale: Boolean
}))

module.exports={
    Product
}