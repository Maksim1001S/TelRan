// let a = prompt("write month number");

// if (a == 1 || a == 2 || a == 12) {
//     console.log("Winter");
// } else if (a > 2 && a <= 5) {
//     console.log("Spring");
// } else if (a > 5 && a <= 8) {
//     console.log("Summer");
// } else if (a > 8 && a <= 11) {
//     console.log("Autumn");
// }else {
//     console.log("invalid value entered");
// }


// for (let i = 0; i < 10; i++) {
//     console.log("Hello " + i);
    
// }


//Arr
// let food = 7;
// let arr = ['milk', 'bread', 'butter', 43, food, true, [42,43]]

// console.log(typeof arr);

// arr[1] = 'cola';
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[6][1]);


// let array = [1,4,6,7];
// let array2 = [];
// for (let i = 0; i < array.length; i++) {
//     let element = array[i] ** 2;
//     array2.push(element);
// }
// console.log(array2);

let array = [];
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
for (let index = 0; index < 40; index++) {
    array.push(getRandomArbitrary(-100, 100))
}
console.log(array);
let array2 = [];

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element > 0) {
        array2.push(element)
    }
}
console.log(array2);
