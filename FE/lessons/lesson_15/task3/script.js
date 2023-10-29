const container = document.querySelector(".container");
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => render_cards(json));

const render_cards = (array) => {
    array.forEach(({title, completed}) => {
        const cardElem = document.createElement("div");
        const titleElem = document.createElement("p");
        const statusElem = document.createElement("p");

        titleElem.innerText = `Task: ${title}`;
        if (completed) {
            statusElem.innerText = "status: done";
            cardElem.style.backgroundColor =("rgb(95, 182, 95)");
        } else {
            statusElem.innerText = `status: not done`;
            cardElem.style.backgroundColor =("rgb(240, 163, 163)");
        }

        cardElem.classList.add("card");

        cardElem.append(titleElem, statusElem);
        container.append(cardElem);
    });
};
