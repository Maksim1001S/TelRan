// 1. На html страницу добавить два параграфа. Первому параграфу задать цвет текста синий. А второму задать размер шрифта 28px
document.querySelector(".first").style.color = "#247ad6";
document.querySelector(".second").style.fontSize = "28px";
// 2. Через JS создать новый параграф с произвольным текстом и поместить его внутрь div-а с классом container
const new_par = document.createElement("p");
const cards_container = document.querySelector(".cards_container");

cards_container.append(new_par);

// 3. Через JS создать карточку пользователя с тремя параграфами (данные произвольные) - Firstname: Oleg, Lastname: Petrov, Age: 56. Поместить краточку пользователя внутрь div-а с классом container
// 4. Добавить карточке пользователя класс userCard. И стилизовать карточку через CSS
// 5. Добавить в карточку пользователя фотографию пользователя
const userCard = document.createElement("div");
const firstnameElem = document.createElement("p");
const lastnameElem = document.createElement("p");
const ageElem = document.createElement("p");
const avatarElem = document.createElement("img");

firstnameElem.innerText = "firstname: Oleg";
lastnameElem.innerText = "lastname:Petrov";
ageElem.innerText = "age: 56";

avatarElem.classList.add("cardAvatar");
userCard.classList.add("userCard");

avatarElem.setAttribute(
    "src",
    "https://www1.wdr.de/radio/cosmo/musik/global-pop-news/russland-proteste-face-100~_v-gseapremiumxl.jpg"
);

userCard.append(avatarElem, firstnameElem, lastnameElem, ageElem);
cards_container.append(userCard);
