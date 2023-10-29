let array = [1,3,4,54]
console.log(...array);

let Object = {
    "3": 2,
    "5": 1,
    "7": 4,
    "9": 1,
    "z": 5,
 }

 console.log(Object.entries(obj).reduce((max, n) => n[1] > max[1] ? n : max).join(': '))