const { json } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    desc:{
        type: Array,
        required: true,
    },
    images:{
        type: Array,
        require: true
    }
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product;