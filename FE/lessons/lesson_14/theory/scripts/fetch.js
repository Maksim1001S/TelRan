fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => render_card(json));

const container = document.querySelector(".container");
const render_card = (users) => {
    users.forEach(({ name, email }) => {
        const cardElem = document.createElement("div");
        const nameElem = document.createElement("h2");
        const emailElem = document.createElement("a");

        nameElem.innerText = name;
        emailElem.innerText = email;

        emailElem.href = `mailto:${email}`;

        cardElem.classList.add("container_card");

        cardElem.append(nameElem, emailElem);
        container.append(cardElem);
    });
};
