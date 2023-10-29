import express from "express";
import products_data from "./data/products_data.js";

const app = express();
const PORT = 5055;

//middleware
app.use(express.json());

//GET========================================================================================================================================================

app.get("/products", (req, res) => {
    res.json(products_data);
});

app.get("/products/:product_id", (req, res) => {
    const { product_id } = req.params;
    const product_item = products_data.find(el => el.id === +product_id)
    res.json(product_item)
});

//GET========================================================================================================================================================


//POST========================================================================================================================================================

app.post("/products", (req, res) => {
    console.log(req.body);
    products_data.push(req.body);
    res.sendStatus(201);
});

//POST========================================================================================================================================================


//DELETE========================================================================================================================================================

app.delete("/products", (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    products_data = products_data.filter(el => el.id !== id);
    res.sendStatus(200);
});

//DELETE========================================================================================================================================================





app.listen(PORT, () => {
    console.log(`\nServer started on port ${PORT}...`);
});