// console.log(document.getElementById("color"));
// console.log(document.body);
// alert(document.querySelector("h2"));
// console.log(document.querySelector('#color'));



// let obj = document.querySelectorAll("#color")
// console.log(obj);
// for (let i = 0; i < obj.length; i++) {
//     const element = obj[i];
//     element.innerText = "Hello"
// }



// let g = document.querySelector("#color")
// g.innerText = "BY";
// console.log(typeof g);
// console.log(g);
let p = document.querySelectorAll("#color");
let img = document.querySelector("img");
function func1() {
    for (let i = 0; i < p.length; i++) {
        const element = p[i];
        element.innerHTML = "new";
    }
    
    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')
}

function func2() {
    for (let i = 0; i < p.length; i++) {
        const element = p[i];
        element.innerHTML = "old";
    }
    img.setAttribute('src', 'jjj')
}

function change() {
    document.querySelector('#button').style = 'padding: 10px; color: red; background-color: black;'
}




