import React from 'react'

import "../../../styles/product-card.css"

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
  const { id, title, price, image} = props.item

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id, title, image, price
    }))
  }
  return (
    <div className='product__item'>
      <div className="product__img">
        <img src={image} alt="product_image" className='w-50'/>
      </div>
      <div className="product__content">
        <h5>
          {title}
        </h5>
        <div className="d-flex align-items-center justify-content-between">
            <span className='product__price'>${price}</span>
            <button 
              className='addToCart__button'
              onClick={addToCart}>
              Add to Cart
            </button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard