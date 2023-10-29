// 1. Дан массив с пользователями. Для каждого пользователя создать карточку с именем + фамилией и аватаром.
// Добавить карточки в контейнер.
// Стилизовать карточки через css
const users = [
    {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
];

const products_container = document.querySelector(".products_container");
users.forEach(({ id, email, first_name, last_name, avatar }) => {
    const userCard = document.createElement("div");
    const avatarElem = document.createElement("img");
    const nameElem = document.createElement("p");
    const emailElem = document.createElement("a");

    userCard.classList.add("userCard");
    avatarElem.classList.add("userCard_avatar");
    nameElem.classList.add("userCard_name");
    emailElem.classList.add("userCard_email");

    nameElem.innerText = `${first_name} ${last_name}`;
    emailElem.innerText = email;

    avatarElem.setAttribute("src", avatar);
    avatarElem.setAttribute("alt", `On picture ${first_name} ${last_name}`);
    userCard.setAttribute("id", id);
    emailElem.href = `mailto:${email}`;

    userCard.append(avatarElem, nameElem, emailElem);
    products_container.append(userCard);
});
