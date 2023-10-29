const people = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 20,
        city: "Moscow",
        country: "Russia",
        active: true,
        rate: 15,
        hours: 100,
    },

    {
        first_name: "Petr",
        last_name: "Petrov",
        age: 12,
        city: "Berlin",
        country: "Germany",
        active: false,
        rate: 17,
        hours: 90,
    },

    {
        first_name: "irina",
        last_name: "Alexandrova",
        age: 46,
        city: "Paris",
        country: "France",
        active: true,
        rate: 20,
        hours: 150,
    },

    {
        first_name: "Denis",
        last_name: "Sokolov",
        age: 30,
        city: "Rome",
        country: "Italy",
        active: false,
        rate: 30,
        hours: 40,
    },
];
// 1.  Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]
const people_info = people.map(
    ({ first_name, last_name, city, country }) =>
        `${first_name} ${last_name} (${city}, ${country})`
);
console.log(people_info);
// 2. Сформируйте массив из объектов, в которых first_name начинается с буквы I (регистр может быть любым)
const people_firstName_with_I = people.filter(
    ({ first_name }) => first_name[0] === "I" || first_name[0] === "i"
);
console.log(people_firstName_with_I);
// 3. Найти объект, в котором страной проживания является Германия. Поместить этот объект в отдельную переменную
const user_from_germany = people.find(({ country }) => country === "Germany");
console.log(user_from_germany);
// 4. Сформировать массив из имен и фамилий активных пользователей старше 30 лет (>=)

var time = performance.now();
const people_online_and_adult = people
    .filter(({ age, active }) => active && age >= 30)
    .map(({ first_name, last_name }) => `${first_name}, ${last_name}`);
console.log(people_online_and_adult);
time = performance.now() - time;
console.log("Время выполнения1 = ", time);

var time1 = performance.now();
const people_online_and_adult1 = people
    .filter((el) => el.active && el.age >= 30)
    .map((el) => `${el.first_name}, ${el.last_name}`);
console.log(people_online_and_adult1);
time1 = performance.now() - time1;
console.log("Время выполнения1 = ", time1);
// 5. Сформировать массив из имен и фамилий активных пользователей. При этом длина сформированной строки (имя + фамилия) должна быть больше 12 символов
const active_user = people
    .filter(({ active }) => active)
    .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
    .filter((el) => el.length > 12);
console.log(active_user);
// 6. Дан массив с числами. Создать новый массив, в который попадут все числа из массива numbers, отсортированные в порядке возрастания. Массив numbers должен остаться неизменным

const numbers = [1, 4, 32, 3, 56, 8, 44];

const sorted_numbers = numbers.map((el) => el).sort((a, b) => a - b);
const sorted_numbers1 = numbers.slice().sort((a, b) => a - b);
const sorted_numbers2 = [...numbers].sort((a, b) => a - b);

const numbers_copy = [...numbers]; // создаем копию массива
// 7. Создать новый массив, в котором пользователи из массива people будут отсортированы в порядке уменьшения зарплаты. Зарплата рассчитывается перемножением ставки на кол-во часов
people_copy = [...people];
people_copy.sort((a, b) => b.rate * b.hours - a.rate * a.hours);
console.log(people_copy);
