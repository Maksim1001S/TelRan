const products = [
    {
        id: 1,
        title: "Apple",
        price: 1.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "United States",
    },
    {
        id: 2,
        title: "Banana",
        price: 0.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "Mexico",
    },
    {
        id: 3,
        title: "Orange",
        price: 2.49,
        image: "https://img.freepik.com/premium-vector/sold-tag-icon-for-product-auction-isolated-vector_32996-2098.jpg",
        country: "Spain",
    },
    {
        id: 4,
        title: "Strawberry",
        price: 3.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "Italy",
    },
    {
        id: 5,
        title: "Grape",
        price: 2.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "France",
    },
    {
        id: 6,
        title: "Pineapple",
        price: 4.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "Brazil",
    },
    {
        id: 7,
        title: "Kiwi",
        price: 1.79,
        image: "https://img.freepik.com/premium-vector/sold-tag-icon-for-product-auction-isolated-vector_32996-2098.jpg",
        country: "New Zealand",
    },
    {
        id: 8,
        title: "Mango",
        price: 2.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "India",
    },
    {
        id: 9,
        title: "Watermelon",
        price: 5.99,
        image: "https://national-travel.ru/wp-content/uploads/wtt-images/2019/01/46140975d38928caaca0230f247e2a92.jpg",
        country: "Germany",
    },
];

const products_container = document.querySelector(".products_container");


const render_cards = () => {
products.forEach(({ id, title, price, image, country }) => {
    const productCard = document.createElement("div");
    const titleElem = document.createElement("h2");
    const imageElem = document.createElement("img");
    const priceElem = document.createElement("p");
    const countryElem = document.createElement("p");
    const buyButtonElem = document.createElement("button");

    productCard.classList.add("productCard");
    titleElem.classList.add("productCard_title");
    imageElem.classList.add("productCard_image");
    priceElem.classList.add("productCard_price");
    countryElem.classList.add("productCard_country");
    buyButtonElem.classList.add("productCard_buyButton");

    titleElem.innerText = `${title}`;
    priceElem.innerText = `$${price}`;
    countryElem.innerText = `Made in ${country}`;
    buyButtonElem.innerText = "buy";

    imageElem.setAttribute("src", image);
    imageElem.setAttribute("alt", `On picture ${title}`);
    buyButtonElem.setAttribute("type", "button");
    buyButtonElem.setAttribute("onClick", "clickButton(this)");
    productCard.setAttribute("id", id);

    productCard.append(
        imageElem,
        titleElem,
        priceElem,
        countryElem,
        buyButtonElem
    );
    products_container.append(productCard);
});
}
render_cards()