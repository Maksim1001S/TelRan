import { Router } from "express";
import Order from "../database/schemas/Order";

const router = Router();



router.post('/send', async (req, res) => {
    const { phoneNum, items } = req.body
    const order = await Order.create({ phoneNum, items })
    res.json({ status: 'OK', message: 'request processed', order: req.body })
})



export default router;