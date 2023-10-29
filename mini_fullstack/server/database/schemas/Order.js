import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    items: {
        type: Array,
        required: true,
        unique: true,
    },
    phoneNum: {
        type: String,
        required: true,
        unique: true,
    }
})

const Order = mongoose.model('order', OrderSchema);

export default Order;