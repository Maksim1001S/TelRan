const arr = [1, "hu", "ko", 1];
const new_arr = [];
const new_arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        new_arr.push("Hello")
    } else {
        new_arr.push(arr[i])
    }
}
console.log(new_arr);
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
        new_arr2.push(arr[i])
    }
}
console.log(new_arr2);
//3
arr.push(67, 7, "good afternoon");
console.log(arr);
