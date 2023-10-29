import express from "express"
import { sequelize } from "./database/database.js";

const app = express();

const PORT = 3007;

app.listen(PORT, () => console.log(`\nServer started on port ${PORT}`))