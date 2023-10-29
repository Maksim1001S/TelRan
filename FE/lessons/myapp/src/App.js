import React, { useEffect } from 'react'
import AddProductForm from './components/AddProductForm/AddProductForm'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import "./App.css"
import CartContainer from './components/CartContainer/CartContainer'
import { useDispatch } from 'react-redux'
import { get_products } from './requests/getProducts'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_products());
  }, [])
  return (
    <div>
      <CartContainer />
    </div>
  )
}

export default App
