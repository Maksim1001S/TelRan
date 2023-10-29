//OBJECTS
// let object = {
//     userName: "Alex",
//     userAge: 24,
// }
// console.log(obj.userName);

// const person_Maks = { 
//     name: "Maks",
//     age: 34,
//     gender: "man",
//     car: "bmw"
// }


// let name = prompt();
// let age = prompt();
// let gender = prompt();
// let car = prompt();
// const person = { 
//     name: name,
//     age: age,
//     gender: gender,
//     car: car
// }
// console.log(person);

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element);
//     }
// }


// let obj = {Коля: 200, Вася: 300, Петя :400};
// for (const key in obj) {
//     console.log(`${key} получает ${obj[key]} в месяц `);
// }







//FUNCTIONS
// function func(a) {
//     console.log(a**5);
// }

// func(2);

// function num(a, b) {
//     if(a>b) {
//         return a
//     }else {
//         return b
//     }
// }
// alert(num(10,15));


const test = {
    name: 'test object',
    createAnonFunction: function() {
      return function() {
        console.log(this.name);
        console.log(arguments);
      };
    },
  
    createArrowFunction: function() {
      return () => {
        console.log(this.name);
        console.log(arguments);
      };
    }
  };


const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');

anon();
arrow();
