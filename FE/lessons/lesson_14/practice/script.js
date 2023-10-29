fetch("https://reqres.in/api/users?page=1")
    .then((res) => res.json())
    .then((json) => render_cards(json.data));

const container = document.querySelector(".container");
const render_cards = (users) => {
    users.forEach(({ avatar, first_name }) => {
        const cardElem = document.createElement("div");
        const avatarElem = document.createElement("img");
        const nameElem = document.createElement("p");

        cardElem.classList.add("container_card")

        avatarElem.src = avatar;
        avatarElem.alt = `picture of ${nameElem}`;
        nameElem.innerText = first_name;

        cardElem.append(avatarElem, nameElem);
        container.append(cardElem);
    });
};
