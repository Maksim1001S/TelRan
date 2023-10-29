import { Router } from "express";
import Category from "../database/schemas/Category.js";
import Product from "../database/schemas/Product.js";

const router = Router();

router.get('/all', async (req, res) => {
    const allCategories = await Category.find();
    const transformedCategories = allCategories.map(({ _id, title, image }) => ({ id: _id, title, image }))
    console.log(transformedCategories);
    res.json(transformedCategories);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.json({ status: 'ERR', message: 'wrong id' });
        return
    }
    const all = await Product.find({ categoryId: +id });
    const category = await Category.findOne({ _id: +id });

    if (all.length === 0) {
        res.json({ status: 'ERR', message: 'empty category' });
        return
    }

    res.json({
        category,
        data: all
    });
})



export default router;