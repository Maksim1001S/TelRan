import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    phoneNum: {
        type: String,
        required: true,
        unique: true,
    }
})

const Coupon = mongoose.model('Coupons', CouponSchema);

export default Coupon;

