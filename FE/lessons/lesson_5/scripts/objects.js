const user = {
    id: 1,
    firstname: "Maks",
    lastname: "Stehnii",
    age: 27,
    online: true,
    groups: ["31/32", "33/34"],
    address: {
        street: "Komarova",
        city: "Kiew",
        coutry: "Ukraine",
        zipcode: "0033",
    },
};

const users = [
    {
        id: 1,
        name: "Maks",
        age: 31,
        online: false,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        online: true,
    },
    {
        id: 3,
        name: "Mary",
        age: 51,
        online: false,
    },
];

const key = "lastname";

console.log(user.groups[1]);
console.log(user.address.coutry);
console.log(user[key]);

//1
const user_info = `${user.firstname} ${user.lastname} (${user.age})`;
console.log(user_info);

//2
const user_address = `${user.address.coutry}, ${user.address.city}, ${user.address.zipcode} ,${user.address.street}`;

console.log(user_address);
//3
const old_user = users.filter((el) => el.age > 30);
console.log(old_user[1]);
//4
const online_user = users.filter((el) => el.online).map((el) => el.name);
console.log(online_user);
// ДЗ
// Дан массив пользователей
const users1 = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 20,
        salary: 500,
    },

    {
        first_name: "Olga",
        last_name: "Petrova",
        age: 12,
        salary: 250,
    },

    {
        first_name: "Irina",
        last_name: "Alexandrova",
        age: 46,
        salary: 1500,
    },

    {
        first_name: "Denis",
        last_name: "Sokolov",
        age: 30,
        salary: 760,
    },
];

// 1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
// 2. Получите из всех объектов значения last_name и сформируйте из этих имен массив
// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной
// 4. Сформируйте новый массив без объекта, где first_name == "Irina"
// 5. Добавьте в конец нового массива объект со значениями:

// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']
