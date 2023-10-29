import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

const ProductItem = ({id, title, price}) => {
  const dispatch = useDispatch()
  return (
    <div className="product">
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => dispatch(addToCartAction({id, title, price}))}>Add to cart</button>
    </div>
  )
}

export default ProductItem