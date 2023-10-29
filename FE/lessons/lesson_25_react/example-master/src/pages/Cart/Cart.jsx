import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    console.log(cart.products);
  return (
    <div className="cart_container">
            {
                cart.products.map(el => {
                    const { id, images, discountPercentage, price, title } = el;
                    return(
                        <div className="cart_product">
                            <p>{title}</p>
                            <img src={images[0]} alt={title} />
                            <p>{price}</p>
                        </div>
                    )
                })
            }
    </div>
  )
};

export default Cart;