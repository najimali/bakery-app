import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from "reactstrap";
import { cartUIActions } from '../../../store/shopping-cart/cartUISlice';

import "../../../styles/carts.css"

import CartItem from './CartItem';

const Carts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUIActions.toggle())
  }

  const onCheckout = ()  => {
    
    console.log("Checkout button click output");
    console.log(cartItems)
  }
  return (
    <div className="cart__container">
      <ListGroup className='cart'>
        <div className="cart__close" onClick={toggleCart}>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {
            cartItems.length > 0 ? cartItems.map((item, index) => (
              <CartItem item ={item} key = {index}/>
            )) : <h6 className='text-center mt-5'>
              You haven't added anything yet.
            </h6>
          }
        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Total Amount: 
            <span> ${totalAmount}</span>
          </h6>
          <button onClick={onCheckout}>
            Checkout 
            {/* <Link to={"/checkout"}>Checkout</Link> */}
          </button>
        </div>
      </ListGroup>
    </div>
  )
}

export default Carts