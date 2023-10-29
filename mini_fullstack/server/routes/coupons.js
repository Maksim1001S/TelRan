import { Router } from "express";
import Coupon from "../database/schemas/Сoupon.js";

const router = Router();

router.get('/all', async (req, res) => {
    const allCoupons = await Coupon.find();
    console.log(allCoupons);
    const transformedCoupons = allCoupons.map(({ _id, phoneNum }) => ({ id: _id, phoneNum }))
    res.json(transformedCoupons);
})

router.post('/send', async (req, res) => {
    const { phoneNum } = req.body
    const coupon = await Coupon.create({ phoneNum })
    res.json({ status: 'OK', message: 'request processed', coupon: { phoneNum } })
})




export default router;