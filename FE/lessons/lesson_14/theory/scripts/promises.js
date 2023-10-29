// let a = 13;

// setTimeout(() => {
//     a = 23;
//     console.log(a);
// }, 2000);

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve((a = 22));
//     }, 2000);
// }).then(() => console.log(a));

// console.log(a);

// =========================

// Если Math.random() создаст число >= 0.5, то промис успешный (выполняется функция resolve). А если меньше 0.5, то промис неуспешный (выполняется функция reject)

const random = new Promise((resolve, reject) => {
    let b = Math.random();
    if (b >= 0.5) {
        resolve(b);
    } else {
        reject(b);
    }
}).then(
    (b) => console.log(`succesfull ${b}`),
    (b) => console.log(`wrong ${b}`)
);
