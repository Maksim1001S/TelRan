import React, { useEffect } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { useSelector } from 'react-redux'

const ProductsContainer = () => {
    const products = useSelector(state => state.products)
  return (
    <div className="products_container">
        {
            products.map((el) => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}

export default ProductsContainer