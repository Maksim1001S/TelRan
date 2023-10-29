//1
// let a = 1;
// for (let i = 2; i < 21; i++) {
//     a *= i;
// }
// console.log(a);
//2
// const products = ['apple', 'orange', 'lime', 'lemon', 'pineapple'];
// const getWordWithL = array =>{
//     const arr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] == 'l') {
//             arr.push(array[i]);
//         }
//     }
//     return arr
// }
// const newArr = getWordWithL(products);
// console.log(newArr);
//3
// const users = [
//     ["F", 'l', 2],
//     ["F", 'l', 2],
//     ["F", 'l', 2],
// ]
// const name = [];
// for (let i = 0; i < users.length; i++) {
//     name.push(users[i][1])
// }
// console.log(name);
//4
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < 31; i++) {
    if (i % 2 == 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(sumEven);
console.log(sumOdd);