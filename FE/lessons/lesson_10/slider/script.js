// 3. Создать слайдер картинок. Ссылки на картинки хранятся в массиве

const photos = [
    "https://reqres.in/img/faces/7-image.jpg",
    "https://reqres.in/img/faces/8-image.jpg",
    "https://reqres.in/img/faces/9-image.jpg",
    "https://reqres.in/img/faces/10-image.jpg",
    "https://reqres.in/img/faces/11-image.jpg",
];
const past_btn = document.querySelector(".past");
const nextbtn = document.querySelector(".next");
const img = document.querySelector("img");
let indexImg = 0;
nextbtn.addEventListener("click", () => {
    if (indexImg < photos.length - 1) {
        img.src = `${photos[indexImg += 1]}`
    } else {
        indexImg = 0;
        img.src = photos[indexImg]
    }
    
})
past_btn.addEventListener("click", () => {
    if (indexImg > 0) {
        img.src = `${photos[indexImg -= 1]}`
    } else {
        indexImg = photos.length - 1;
        img.src = photos[indexImg];
    }
})

let photoIndex = 0;

img.addEventListener('click', event => {
  event.target.src = photos[photoIndex++ % photos.length]
})

photoIndex++ % photos.length

// 0 % 5 === 0
// 1 % 5 === 1
// 2 % 5 === 2
// 3 % 5 === 3
// 4 % 5 === 4
// 5 % 5 === 0
// 6 % 5 === 1
// 7 % 5 === 2