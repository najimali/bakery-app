import React , { useRef , useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { APP_NAME } from '../../assets/constants';
import "../../styles/header.css";
import logo from "../../assets/images/logo.png"

import { cartUIActions } from '../../store/shopping-cart/cartUISlice';
import { navLinks } from '../../assets/navlinks'


const Header = () => {

    const menuRef = useRef(null)
    const headerRef = useRef(null);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    const dispatch = useDispatch()

    const toggleCart = () => {
        dispatch(cartUIActions.toggle())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
          ) {
            headerRef.current.classList.add("header__shrink");
          } else {
            headerRef.current.classList.remove("header__shrink");
          }
        });
    
        return () => window.removeEventListener("scroll", null);
      }, []);
      
    return <header className='header' ref={headerRef}>
    <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <h5>{APP_NAME}</h5>
            </div>
            {/* ============= Menu ============= */}
            <div className='navigation' ref = { menuRef } onClick = {toggleMenu}>
                <div className="menu d-flex align-items-center gap-5">
                    {
                        navLinks.map((item, index) =>
                            <NavLink
                                to = {item.path} 
                                key = {index}
                                className = {(navClass) => navClass.isActive ? "active__menu" : ""}
                            >
                                {item.display}
                            </NavLink>
                        )
                    }
                </div>
            </div>
            {/* nav right icons  */}
            <div className="nav__right d-flex align-items-center gap-4">
                <span className="cart__icon" onClick={toggleCart}>
                    <i className='ri-shopping-basket-line'></i>
                    {/* Num of items in the carts icons  */}
                    <span className="cart__badge">
                        {totalQuantity}
                    </span>
                </span>

                <span className="mobile__menu" onClick={toggleMenu}>
                    <i className="ri-menu-line"></i>
                </span>
            </div>
        </div>
    </Container>
 </header>
}

export default Header