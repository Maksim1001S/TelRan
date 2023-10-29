import { Router } from "express";
import Product from "../database/schemas/Product.js";

const router = Router();

router.get('/all', (req, res) => {

    async function all() {
        const all = await Product.find();
        res.json(all);
    }
    all();
})


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.json({ status: 'ERR', message: 'wrong id' });
        return
    }
    const all = await Product.findOne({ _id: +id });

    if (all.length === 0) {
        res.json({ status: 'ERR', message: 'product not found' });
        return
    }

    res.json(all);
})



export default router;