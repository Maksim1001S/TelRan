const ADD_PRODUCT = "ADD_PRODUCT";
const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const addProductsAction = payload => ({
    type: ADD_PRODUCT,
    payload
})
export const fetchProductsAction = payload => ({
    type: FETCH_PRODUCTS,
    payload
})

export const productsReducer = (state = [], action) => {
    if (action.type === ADD_PRODUCT) {
        console.log(action.payload);
        return [...state, action.payload]
    } else if (action.type === FETCH_PRODUCTS) {
        return action.payload
    } else {
        return state
    }
}