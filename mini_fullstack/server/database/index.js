import mongoose from "mongoose";
import { password } from "./password.js";

mongoose.connect(`mongodb+srv://maks1001s:${password}@cluster0.ckc6taf.mongodb.net/?retryWrites=true&w=majority&dbName=gartenDB`)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err))

