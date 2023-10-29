import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount_price: {
        type: Number,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema);

export default Product;

