// .filter() - возвращает новый массив, в который попадут те элементы из исходного массива, которые соответствуют переданному условию
const numbers = [23, 65, -1, 98, -7, 77, 37, -8, 544, 17];
const greetings = ["Hello", "Hi", "hey", "good afternoon", "good evening"];
//1
const negative_numbers = numbers.filter((el) => el < 0);
// console.log(negative_numbers);
//2
const positiveNumbers_and_lastNumberIs7 = numbers.filter((el) => el % 10 === 7);
// console.log(positive_numbers);
//3
const newArr = greetings.filter((el) => el.length > 5);
// console.log(newArr);
const newArr1 = greetings.filter((el) => el[0].toLowerCase() === el[0]);
// console.log(newArr1);
//4
const newArr2 = greetings.filter((el) => el[0] === "G" || el[0] === "g");
// console.log(newArr2);
//5
const newArr3 = [];
greetings.forEach((el) => {
    if (el.length > 5) {
        newArr3.push(el.toUpperCase());
    }
});
// console.log(newArr3);
//6
const newArr4 = greetings.map((el) => el[0].toUpperCase() + el.slice(1));
// console.log(newArr4);
// .find() - возвращает первый элемент, который первый подошел по условию
const greetings_long = greetings.find((el) => el.length > 5);
// console.log(greetings_long);
// .sort() - сортирует элементы и мутирует массив
console.log(numbers);
console.log(numbers.sort((a, b) => a - b));
