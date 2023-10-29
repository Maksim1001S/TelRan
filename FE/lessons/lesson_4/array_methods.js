// .froEach() - ничего не возвращяет (undefined), выполняет указанную функцию один раз для каждого элемента массива

const arr = [1, "hu", "ko", 1];
const nums = [55, -90]
//1
// const new_arr1 = [];
// arr.forEach(el => {
//     typeof el === 'string' ? new_arr1.push("hello") : new_arr1.push(el)
// })
// console.log(new_arr1);
//2
// const new_arr2 = [];
// arr.forEach(el => {
//     typeof el !== 'string' ? new_arr2.push(el) : ''
// })
// console.log(new_arr2);
//3
// const new_arr3 = [];
// nums.forEach(el =>{
//     el > 0 ? new_arr3.push(el) : '';
// })
// console.log(new_arr3);


// .map() - возвращает новый массив, выполняет указанную функцию один раз для каждого элемента массива
//1
const doubled_nums1 = nums.map(el => el * 2);
console.log(doubled_nums1);
//2
const new_arr = arr.map(el => typeof el === 'string' ? "hello" : el)
console.log(new_arr);
//3
const new_nums = nums.map(el => {
    el % 10 === 5 ? el * 3 : el;
})
console.log(new_nums);

// ДЗ
// Массив numbers
// 1. Сформировать массив из последних цифр элементов массива
// 2. Сформировать массив из чисел умноженных на 10
// 3. Сформировать массив, где отрицательные числа станут положительными

// Массив arr
// 1. Сформировать массив, в котором все элементы будут заменены на 0
// 2. Сформировать массив, где все булевые значения будут заменены на 10
// 3. Сформировать массив, где строки короче 4 символов будут заменены на строку 'too short string'


