// Создать БД

use("ls1")

// Удалить БД

db.dropDatabase()

// Посмотреть список всех БД

show databases

// Создать коллекцию

db.createCollection('users')

// Удалить коллекцию

db.users.drop()

// Посмотреть список всех коллекций

show tables

// Добавить в коллекцию один документ (объект)

db.users.insertOne({
    _id: 1,
    first_name: 'Ivan',
    last_name: 'Petrov',
    age: 58
})

// Добавить в коллекцию несколько объектов

db.users.insertMany([
    {
        _id: 2,
        first_name: 'Oleg',
        last_name: 'Ivanov',
        age: 34
    },
    {
        _id: 3,
        first_name: 'Irina',
        last_name: 'Sokolova',
        age: 22
    },
    {
        _id: 4,
        first_name: 'Boris',
        last_name: 'Sidorov',
        age: 51
    }
])


// Удалить один документ

db.users.deleteOne({ id: 1 })

// Удалить несколько документов

db.users.deleteMany({ age: { $lt: 40 } })


// ОПЕРАТОРЫ СРАВНЕНИЯ
// $ne - не равно
// $lt - меньше
// $lte - меньше или равно
// $gt - больше
// $gte - больше или равно
// $in - значение соответствует одному из списка


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// $and
// $or


// Посмотреть содержимое коллекции

db.users.find()

// Вывести все документы, у которых в age значение >= 30

db.users.find({ age: { $gte: 30 } })

// Вывести все документы, у которых в age значение соответствует одному из списка 51 и 34

db.users.find({ age: { $in: [51, 34] } })

// Вывести все документы, у которых age больше 40 и имя входит в список Boris и Oleg

db.users.find({
    $and: [
        { age: { $gt: 40 } },
        { first_name: { $in: ['Boris', 'Oleg'] } }
    ]
})

db.users.find({
    age: { $gt: 40 },
    first_name: { $in: ['Boris', 'Oleg'] }
})

// Вывести все документы, у которых age входит в диапазон между 20 и 40 (включительно)

db.users.find({
    $and: [
        { age: { $gte: 20 } },
        { age: { $lte: 40 } }
    ]
})

db.users.find({
    age: { $gte: 20, $lte: 40 }
})


// ОПЕРАТОРЫ UPDATE
// $set - если свойство существует, то значение будет заменено на указанное. Если свойства не существует, то оно будет создано с указанным значением
// $unset - удаляет свойство
// $rename - переименовывает свойство

// У объекта с айди 3 изменить имя на Boris

db.users.updateOne(
    { _id: 3 },
    { $set: { name: 'Boris' } }
)

// Объекту с айди 3 добавить свойство country со значением Germany

db.users.updateOne(
    { _id: 3 },
    { $set: { country: 'Germany' } }
)

// Всем документам добавить свойство salary со значением 0

db.users.updateMany(
    {},
    { $set: { salary: 0 } }
)

// У объекта с айди 3 удалить свойство country

db.users.updateOne(
    { _id: 3 },
    { $unset: { country: '' } }
)

// У всех документов переименовать name в first_name

db.users.updateMany(
    {},
    { $rename: { 'name': 'first_name' } }
)

// ПРАКТИКА 

// 1. Удалить коллекцию users

db.users.drop()

// 2. Создать коллекцию users и заполнить документами (4 штуки) со следующими свойствами (_id, name, age, gender). Используйте следующие данные

// 1 Anatoliy 28 m
// 2 Svetlana 25 f
// 3 Nikita 33 m
// 4 Olga 22 f

db.createCollection('users')

db.users.insertMany([
    {
        _id: 1,
        name: "Anatoliy",
        age: 28,
        gender: "m"
    },
    {
        _id: 2,
        name: "Svetlana",
        age: 25,
        gender: "f"
    },
    {
        _id: 3,
        name: "Nikita",
        age: 33,
        gender: "m"
    },
    {
        _id: 4,
        name: "Olga",
        age: 22,
        gender: "f"
    }
])

// 3. Вывести все документы, содержащие данные о женщинах

db.users.find({ gender: 'f' })

// 4. Вывести всех мужчин в возрасте от 30 до 38 лет включительно

db.users.find({
    $and: [
        { age: { $gte: 30, $lte: 38 } },
        { gender: 'm' }
    ]
})

db.users.find({
    age: { $gte: 30, $lte: 38 },
    gender: 'm'
})

// 5. Вывести людей, чье имя входит в список Anatoliy, Irina, Ivan, Semen, Olga

db.users.find({
    name: { $in: ['Anatoliy', 'Irina', 'Ivan', 'Semen', 'Olga'] }
})

// 6. Удалить всех пользователей младше 28 лет

db.users.deleteMany({
    age: { $lt: 28 }
})