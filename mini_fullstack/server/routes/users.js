import { Router } from "express";

const router = Router();



let usersList = [
    {
        id: 1,
        first_name: 'Ivan',
        last_name: 'Petrov',
        age: 18
    },
    {
        id: 2,
        first_name: 'Olga',
        last_name: 'Ivanova',
        age: 45
    },
    {
        id: 3,
        first_name: 'Boris',
        last_name: 'Sinitsyn',
        age: 32
    },
    {
        id: 4,
        first_name: 'Inga',
        last_name: 'Gribova',
        age: 54
    }
]

router.get("/", (req, res) => [
    res.json(usersList)
])

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = usersList.find(el => el.id === +id)
    res.json(user)
})

router.post("/add", (req, res) => {
    console.log(req.body);
    usersList.push(req.body);
    res.json(req.body);
})

router.delete("/delete", (req, res) => {
    const { id } = req.body;
    usersList = usersList.filter(el => el.id !== id)
    res.sendStatus(200)
})
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;
    let userItem = usersList.find(el => el.id === +id);
    userItem.first_name = first_name;
    userItem.last_name = last_name;
    userItem.age = age;
    res.json(req.body)
})

export default router;