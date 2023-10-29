
// let p = document.querySelector('.lo');

// lol.addEventListener('click', () =>{
//     p.classList.add('active');
// })
// lol2.addEventListener('click', () =>{
//     p.classList.remove('active')
// })

// let addButton = document.querySelectorAll('.add')
// for (let i = 0; i < addButton.length; i++) {
//     addButton[i].addEventListener('click', () =>{
//         p.classList.add('active');
//     })
// }
// let removeButton = document.querySelectorAll('.remove')
// for (let i = 0; i < addButton.length; i++) {
//     removeButton[i].addEventListener('click', () =>{
//         p.classList.remove('active');
//     })
// }



// let card = document.querySelectorAll('.card')
// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener('click', () =>{
//         card[i].classList.add('active');
//         card[i].classList.remove('card');
//     })
// }
// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener('dblclick', () =>{
//         card[i].classList.add('card');
//         card[i].classList.remove('active');
//     })
// }


let item = document.querySelectorAll('.item')

for (let i = 0; i < item.length; i++) {
    item[i].insertAdjacentHTML('afterbegin', '<button class="remov">[x]</button>')
    item[i].firstChild.addEventListener('click', function () {
        item[i].remove()
    })
}