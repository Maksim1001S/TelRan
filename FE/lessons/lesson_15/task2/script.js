let count = 1;
const [slider_buttons_left, slider_buttons_right] = document.querySelectorAll(".slider button");
const users_container = document.querySelector(".users_container");

const get_user = (number) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
        .then((res) => res.json())
        .then((json) => render_card(json));






const render_card = ({name, username, email, address}) => {
    users_container.innerText = "";
    const card_userElem = document.createElement("div");
    const nameElem = document.createElement("h2");
    const usernameElem = document.createElement("h3")
    const emailElem = document.createElement("a");
    const addressElem = document.createElement("p");

    const {street, suite, city, zipcode} = address;

    nameElem.innerText = `name: ${name}`;
    usernameElem.innerText = `username: ${username}`;
    emailElem.innerText = `email: ${email}`;
    emailElem.href = `mailto:${email}`
    addressElem.innerText = `Address: ${suite}, ${street}, ${zipcode}, ${city}`;

    card_userElem.append(nameElem, usernameElem, emailElem, addressElem);
    users_container.append(card_userElem);
}

get_user(count);

slider_buttons_left.addEventListener("click", () => {
    if (count == 1) {
        count = 10;
    } else {
        count--
    }
    get_user(count);
});
slider_buttons_right.addEventListener("click", () => {
    if (count == 10) {
        count = 1;
    } else {
        count++
    }
    get_user(count);
});

