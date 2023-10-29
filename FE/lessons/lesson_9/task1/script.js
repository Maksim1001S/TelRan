// const button = document.querySelector(".button");
// const square = document.querySelector(".square");
// square.addEventListener("click", (event) => event.style = "width: 300px; height: 300px");

// 3. Создать зеленый квадрат с размерами 200х200px. При клике на кнопку увеличивать квадрат до 300х300px и менять его цвет на синий.

// const change_btn = document.querySelector(".change_btn");

// const random_num = () => Math.round(Math.random() * 255);
// change_btn.addEventListener("click", (event) => {
    
//     event.target.style.backgroundColor = `rgb(${random_num()}, ${random_num()}, ${random_num()})`;
// });

// 4.При клике на кнопку создавать в strings_container параграф с текстом случайного цвета 'hello, world!'
// const random_num = () => Math.round(Math.random() * 255);
// const add_string_btn = document.querySelector(".add_string_btn");
// const strings_container = document.querySelector(".strings_container")
// add_string_btn.addEventListener("click", () => {
//     const stringElem = document.createElement("p")

//     stringElem.innerText = "Hello, world!";

//     stringElem.style.color = `rgb(${random_num()}, ${random_num()}, ${random_num()})`;

//     strings_container.append(stringElem);
// });

// 5.
const create_card_btn = document.querySelector(".create_card_btn");
const cards_container = document.querySelector(".cards_container")

const stringElem = "Maks STehnii";
create_card_btn.addEventListener("click", () => {
    const card = document.createElement("div")
    const name = document.createElement("p");

    name.innerText = stringElem;

    card.classList.add("card");

    card.append(name);

    cards_container.append(card);
});