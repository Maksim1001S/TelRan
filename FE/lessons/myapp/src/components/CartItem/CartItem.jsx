import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteInCartAction, dicrementCountAction, incrementCountAction } from '../../store/reducers/cartReducer'

const CartItem = ({id, title, price, count}) => {
    const dispatch = useDispatch()
  return (
    <div className="product_cart">
        <p>{title}</p>
        <p>{price}</p>
        <div className='cart_count'>
            <button onClick={() => dispatch(incrementCountAction(id))}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(dicrementCountAction(id))}>-</button>
        </div>
        <p className='close' onClick={() => dispatch(deleteInCartAction(id))}>X</p>
    </div>
  )
}

export default CartItem