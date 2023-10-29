import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductsAction } from '../../store/reducers/productsReducer'

const AddProductForm = () => {
    const dispatch = useDispatch()

    const submit = (event) => {
        event.preventDefault()
        const {title, price} = event.target;
        const product = {
            id: Date.now(),
            title: title.value,
            price: +price.value,
        }
        dispatch(addProductsAction(product))
        event.target.reset()
    }
  return (
    <form onSubmit={submit}>
        <input type="text" name='title' placeholder='title'/>
        <input type="number" name='price' placeholder='price'/>
        <button>add</button>
    </form>
  )
}

export default AddProductForm