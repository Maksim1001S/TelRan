const new_arrivals_container = document.querySelector(
    ".new_arrivals_container"
);

const new_arrivals = [
    {
        id: 1,
        title: "Black and white sport cap",
        price: 19,
        img: "./media/image1.png",
    },
    {
        id: 2,
        title: "Metal bridge sunglasses",
        price: 65,
        img: "./media/image2.png",
    },
    {
        id: 3,
        title: "Green baby romper",
        price: 76,
        img: "./media/image3.png",
    },
    {
        id: 4,
        title: "Mid-rise slim cropped fit jeans",
        price: 43,
        img: "./media/image1.png",
    },
    {
        id: 5,
        title: "Red dangle earrings",
        price: 23,
        img: "./media/image2.png",
    },
];

new_arrivals.forEach(({ title, price, img }) => {
    const cardElem = document.createElement("div");
    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");
    const imgElem = document.createElement("div");

    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;

    imgElem.style.backgroundImage = `url(${img})`;
    imgElem.classList.add("imgElem");

    cardElem.append(imgElem, titleElem, priceElem);
    new_arrivals_container.append(cardElem);
});

// CATEGORIES
const popular_categories_obj = [
    {
        id: 1,
        title: "Tops",
        img: "./media/image_categ1.png",
    },
    {
        id: 2,
        title: "T-shirts",
        img: "./media/image_categ2.png",
    },
    {
        id: 3,
        title: "Caps",
        img: "./media/image_categ3.png",
    },
    {
        id: 4,
        title: "Sandals",
        img: "./media/image_categ4.png",
    },
    {
        id: 5,
        title: "Jackets",
        img: "./media/image_categ5.png",
    },
    {
        id: 6,
        title: "Coats",
        img: "./media/image_categ6.png",
    },
];

const popular_categories = document.querySelector(".popular_categories");
const popular_categories_container = document.createElement("div");
popular_categories_container.classList.add("popular_categories_container");

popular_categories_obj.forEach(({id, title, img}) => {
    const popular_categories_container_card = document.createElement("div");
    const popular_categories_container_card_img = document.createElement("img");
    const popular_categories_container_card_title = document.createElement("p");

    popular_categories_container_card.classList.add("popular_categories_container_card")
    popular_categories_container_card_img.classList.add("popular_categories_container_card_img");
    popular_categories_container_card_title.classList.add("popular_categories_container_card_title");

    popular_categories_container_card_img.src = img;
    popular_categories_container_card_img.alt = title;
    popular_categories_container_card_title.innerText = title;

    popular_categories_container_card.append(
        popular_categories_container_card_img,
        popular_categories_container_card_title
    );

    popular_categories_container.append(popular_categories_container_card);
});
popular_categories.append(popular_categories_container);
