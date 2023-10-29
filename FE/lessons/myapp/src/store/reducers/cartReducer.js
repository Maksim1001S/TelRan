const Add_TO_CART = "Add_TO_CART";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DICREMENT_COUNT = "DICREMENT_COUNT";
const DELETE_IN_CART = "DELETE_IN_CART";
const CLEAR_CART = "CLEAR_CART";

export const incrementCountAction = payload => ({
    type: INCREMENT_COUNT,
    payload
})
export const dicrementCountAction = payload => ({
    type: DICREMENT_COUNT,
    payload
})
export const addToCartAction = payload => ({
    type: Add_TO_CART,
    payload
})
export const deleteInCartAction = payload => ({
    type: DELETE_IN_CART,
    payload
})
export const clearCartAction = payload => ({
    type: CLEAR_CART,
    payload
})

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id)
    if (!productInState) {
        return [...state, { ...payload, count: 1 }]
    } else {
        productInState.count++;
        return [...state]
    }
}
const increment = (state, payload) => {
    const productInState = state.find(el => el.id === payload)
    productInState.count++;
    return [...state];
}
const dicrement = (state, payload) => {
    const productInState = state.find(el => el.id === payload)
    if (productInState.count <= 1) {
        const products = state.filter(el => el.id !== payload)
        return products
    }
    productInState.count--;
    return [...state];
}

export const cartReducer = (state = [], action) => {
    if (action.type === Add_TO_CART) {
        return checkProduct(state, action.payload);
    } else if (action.type === INCREMENT_COUNT) {
        return increment(state, action.payload);
    } else if (action.type === DICREMENT_COUNT) {
        return dicrement(state, action.payload);
    } else if (action.type === DELETE_IN_CART) {
        return state.filter(el => el.id !== action.payload);
    } else if (action.type === CLEAR_CART) {
        return [];
    } else {
        return state
    }
}