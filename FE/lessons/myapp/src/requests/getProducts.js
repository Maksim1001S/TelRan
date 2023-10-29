import { fetchProductsAction } from "../store/reducers/productsReducer";


export const get_products = dispatch => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(json => {
            console.log(json.products);
            dispatch(fetchProductsAction(json.products));
        })
        .catch((error) => {
            console.error("Error fetching country info:", error);
        });
}