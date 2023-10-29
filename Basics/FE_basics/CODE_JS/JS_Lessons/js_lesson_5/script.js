let DOM = {
    head:{
        title:'djfkj'
    },
    body:{
        div:{
            h2:'jkjjkjkj'
        }
    }
}



console.log(DOM.head.title);
document.querySelector('h2').innerHTML = '<p>lala</p>';
document.querySelectorAll('p')[1].innerText = '23';
let q = document.querySelector('h2');
console.log(q);
document.querySelectorAll('p')[2].innerText = q;

let img = document.querySelector('img');
img.setAttribute('alt', "lala");
img.setAttribute('width', "200px");

let input = document.querySelector('input');
input.setAttribute('value', "i am button");
input.setAttribute('type', 'button');

let a = document.querySelector('a');
a.innerText = 'youtube';
a.setAttribute('href', "https://www.youtube.com/");

//remove()
function rem() {
    img.removeAttribute('src');
}

//card
function remCard() {
    let butt = document.querySelector('.item')
    butt.remove()
}

//create

let h2 = document.createElement('h2');
let h1 = document.createElement('h1');
h2.innerText = 'append';
h1.innerText = 'prepend';
document.querySelectorAll('section')[2].append(h2);//after
document.querySelectorAll('section')[2].prepend(h1);//before


//20 p

for (let i = 0; i < 20; i++) {
    let p = document.createElement('p');
    let section = document.querySelectorAll('section')[3];
    section.append(p);
    section.querySelectorAll('p')[i].innerText = `${i}`;
    
}

//Task

let array = ['I', 'like', 'JS'];
for (let i = 0; i < array.length; i++) {
    let p = document.createElement('p');
    p.innerText = array[i];
    document.querySelectorAll('section')[4].append(p);
}


//Task
let link = document.createElement('p');
let img1 = document.createElement('img');
let src = prompt('write hier link');
img1.setAttribute('src', src);
link.innerText = src;

document.querySelectorAll('section')[5].append(img1);
document.querySelectorAll('section')[5].append(link);

