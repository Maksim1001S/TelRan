import { Router } from "express"
import User from "../database/schemas/User.js";
import { comparePassword, hashPassword } from "../utils/hash_password.js";

const router = Router();

router.post('/register', async (req, res) => {
    const { username, email } = req.body;
    const userDB = await User.findOne({ $or: [{ username }, { email }] });
    if (userDB) {
        res.status(400).send({ message: 'User already exists' })
    } else {
        const password = hashPassword(req.body.password);
        const newUser = await User.create({ username, email, password });
        res.status(201).send({ message: 'User created ' })
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) res.status(400).send({ message: "Email or password were not provided" });

    const userDB = await User.findOne({ email });

    const isValid = comparePassword(password, userDB.password)

    if (isValid) {
        res.status(200).send("You are logged in")
    } else {
        res.status(401).send("wrong email or password");
    }
})




export default router;