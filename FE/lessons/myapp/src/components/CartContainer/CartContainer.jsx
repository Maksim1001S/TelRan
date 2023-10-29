import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { clearCartAction } from '../../store/reducers/cartReducer'

const CartContainer = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
  return (
    <div className="cart_container">
        <h1>Cart</h1>
        {
            cart.map(el => <CartItem key={el.id} {...el} />)
        }
        <div className='clear_btn' onClick={() => dispatch(clearCartAction())}>clear out</div>
        <div>
            <p>Total:</p>
            <p>
                {
                    cart.reduce((accumulator, {price, count}) => accumulator + price*count, 0)
                }
            </p>
        </div>
    </div>
  )
}

export default CartContainer