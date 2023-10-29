//ИМПЕРАТИВНОЕ И ДЕКЛАРАТИВНОЕ программирование
//Дан массив
const nums = [1, 2, -10, 5, -40];
//императивный подход
const negative_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        negative_numbers.push(numbers[i]);
    }
}
//Декларативный подход
const negative_numbers1 = numbers.filter((el) => el < 0);
//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
const student = {
    first_name: "Anton",
    last_name: "Gribov",
    age: 36,
    group: "FE 31/32",
};
const { first_name, last_name, age, group } = student;
const student_info = `${first_name} ${last_name}, ${age} years old (${group})`;
console.log(student_info);

//
const users = [
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

// Для каждого пользователя из массива users создать строку с именем и фамилией. Собрать все строки в новый массив
const users_names = users.map(
    ({ first_name, last_name }) => `${first_name} ${last_name}`
);
console.log(users_names);
