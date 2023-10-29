// const nums = [1, 2, 3, 4, 5, 6];

// nums.push(7);
// console.log(nums);

// nums.unshift(0);
// console.log(nums);

// nums.pop();
// console.log(nums);

// nums.shift();
// console.log(nums);

const numbers = [2, 34, 87, -54, 99, 105, 39, 90, 15];
//1
// const last_digits = [];
// for (let i = 0; i < numbers.length; i++) {
//     last_digits.push(Math.abs(numbers[i]) % 10)
// }
// console.log(last_digits);
//2
// numbers.push(120);
// numbers.shift();
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         sum += numbers[i]
//     }
// }
// console.log(sum);

const getSum = num =>{
    let a = 0;
    for (let i = 1; i <= num; i++) {
        a += i;        
    }
    return a
}
console.log(getSum(5));

const getLeast = (n, b) =>{
    // if (n < b) {
    //     return n
    // } else {
    //     return b   
    // }
    return Math.max(n, b)
}
const getLeast1 = (n, b) => n > b ? b : n;
console.log(getLeast(5, 11));
console.log(getLeast1(9, 8));

const least = (a, b) =>{
    if (a > b) {
        console.log(b);
        console.log(a);
    } else {
        console.log(a);
        console.log(b);
    }
}
least(10,9)