fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((json) =>{ console.log(json.products); render_card(json.products)});

const container = document.querySelector(".container");
const render_card = (products) => {
    products.forEach( ({images, title, description, price}) => {
        const product_card = document.createElement("div")
        const imageElem = document.createElement("img");
        const titleElem = document.createElement("h2");
        const desriptionElem = document.createElement("p")
        const priceElem = document.createElement("p");

        imageElem.src = images[0];

        titleElem.innerText = title;
        desriptionElem.innerText = description;
        priceElem.innerText = price;

        product_card.append(imageElem, titleElem, desriptionElem ,priceElem)
        container.append(product_card);
    });
}






