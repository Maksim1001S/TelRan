import express from "express";
import usersRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import categoriesRouter from "./routes/categories.js"
import couponsRouter from "./routes/coupons.js"
import productsRouter from "./routes/products.js"
import cors from "cors"
import "./database/index.js"

const app = express();



const PORT = 4001;

app.use(express.static('public'))
app.use(cors({
    origin: "*"
}))
app.use(express.json());
app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/products", productsRouter)
app.use("/categories", categoriesRouter)
app.use("/coupons", couponsRouter)





app.listen(PORT, () => {
    console.log(`\nServer started on port ${PORT}...`);
})