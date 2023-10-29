
const form = document.querySelector("form");
const container = document.querySelector(".container");


const render_cards = ({name, email}) => {
        container.innerText = "";
        const cardElem = document.createElement("div");
        const nameElem = document.createElement("p");
        const emailElem = document.createElement("a");

        nameElem.innerText = `Name: ${name}`;
        emailElem.innerText = `Email: ${email}`;

        cardElem.append(nameElem, emailElem);
        container.append(cardElem);
    
}

const get_user = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res => res.json())
        .then(json => render_cards(json));
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    get_user(event.target.count.value);
    console.log(event.target.count.value);
    event.target.reset();
})