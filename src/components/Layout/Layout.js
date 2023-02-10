import React from 'react'
import { useSelector } from 'react-redux'

import Header from "../Header/Header.jsx"
import Routes from "../../routes/Routers"
import Carts from '../UI/cart/Carts.jsx'

const Layout = () => {

  const showCart = useSelector((state) => state.cartUI.isCartVisible)
  return (
    <div>
        <Header/>
        { showCart && <Carts/> }
        <div>
            <Routes/>
        </div>
    </div>
  )
}

export default Layout