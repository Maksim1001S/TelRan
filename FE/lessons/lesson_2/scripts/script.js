//Task1
// const numbers = [1, 2, 3, 45, 65, 45];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
    
// }
//Task2
// for (let i = 0; i < numbers.length; i += 2) {
//     console.log(numbers[i] * 2);
    
// }

//Task3
// const getElemOfArr = arr => {
//     for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
//     }
// }
// getElemOfArr(numbers);
//Task4
// const getElem = (arr, index) =>{
//     console.log(arr[index]);
// }
// getElem(numbers, 0);



// // 1. Сгенерировать случайное целое число от 0 до 10

// const random = Math.round(Math.random() * 10);

// // 2. Сгенерировать случайное целое число от 1 до 10

// const random1 = Math.ceil(Math.random() * 10);

// // 3. Сгенерировать случайное целое число от 2 до 12

// const random2 = Math.round(Math.random() * 10 + 2);

// // 4. Сгенерировать случайное целое число от 10 до 30

// const random3 = Math.round(Math.random() * 20 + 10);
// // 5
// const ran1 = Math.round(Math.random() *6);
// const ran2 = Math.round(Math.random() *6);
// console.log(`${ran1}x${ran2}`);
// 6
// const getMaxNumber = (a, b, c, d, f) => Math.max(a, b, c, d, e);

// console.log(getMaxNumber(2,5,6,7,45));
// 7
// const numbers = [9, 25, 81, 16];
// const toSqrtArr = arr =>{
//     const newArr =[];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(Math.sqrt(arr[i]));
//     }
//     return newArr
// }
// const numbers_sqrt = toSqrtArr(numbers);
// console.log(numbers_sqrt);
// 8
// const greetings = ["hey", "hi", "Hello", "Good morning", "Good afternoon"];
// const long_greetings = [];
// const findLongWord = arr =>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length > 6){
//             long_greetings.push(arr[i])
//         }
        
//     }
// }
// findLongWord(greetings);
// console.log(long_greetings);

//9
// const numbers = [1, 5, -100, 98, -3];

// const getNewNumbers = arr =>{
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// const newNumbers = getNewNumbers(numbers);
// console.log(newNumbers);
// 10
const numbers = [1, 5, -100, 98, -3];
const getNewNumbers = arr =>{
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
            newArr.push(arr[i])
    }
    return newArr
}
const newNumbers = getNewNumbers(numbers);
console.log(newNumbers);