const add_user_form = document.querySelector(".add_user_form");
add_user_form.addEventListener("submit", (event) => {
    const { fristname, lastname, age } = event.target;
    event.preventDefault();
    console.log(`${fristname.value} ${lastname.value}, ${age.value}`);
    event.target.reset();
});

//1
const products_form = document.querySelector(".products_form");

const products_container = document.querySelector(".products_container");

const products = [];
let id_num = 0;

products_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { title, price, picture } = event.target;

    id_num++;
    const product = {
        id: id_num,
        title: title.value,
        price: price.value + "$",
        img: picture.value,
    };

    products.push(product);

    render_cards(products);

    event.target.reset();
});

const render_cards = (arr) => {
    arr.forEach((el) => {
        if (el.id === arr.length) {
            const productCard = document.createElement("div");
            const productCard_title = document.createElement("p");
            const productCard_price = document.createElement("p");
            const productCard_price_delete_btn =
                document.createElement("button");

            const img = document.createElement("img")

            productCard_price_delete_btn.innerText = "delete";
            productCard_title.innerText = el.title;
            productCard_price.innerText = el.price;

            img.src = el.img;
            img.alt = "picture";

            productCard.classList.add("productCard");
            productCard_price_delete_btn.addEventListener("click", () => productCard.remove());


            productCard.append(
                img,
                productCard_title,
                productCard_price,
                productCard_price_delete_btn
            );

            products_container.append(productCard);
        }
    });
    console.log(products);
};

