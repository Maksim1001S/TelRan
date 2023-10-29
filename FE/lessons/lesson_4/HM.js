//HW3
//1
// const getLongestStr = (a, b) => {
//     if (a.length > b.length) {
//         return a
//     } else {
//         return b
//     }
// }
//2
const getLongestStrFromArr = array => {
    let shortest = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i].length < shortest.length) {
            shortest = array[i];
        }
    }
    return shortest
}
console.log(getLongestStrFromArr(["al", "all"]));
//3
const newArr = [];
const arr = [1, 'Hello']
const getNum = array => {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            newArr.push(array[i])
        }
        
    }
}
getNum(arr)
console.log(newArr);
console.log(typeof arr[0]);