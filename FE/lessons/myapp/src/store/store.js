import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));