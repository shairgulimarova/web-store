import React from 'react'
import { useState } from "react"; 
import {Link,NavLink} from "react-router-dom"; 


import menuIcon from '../../images/burger-menu.svg';
import profileIcon from '../../images/profile.svg';
import shoppingCart from '../../images/shopping-cart.png'
import './navbar.scss'

function Navbar() {

    const [menuActive, setMenuactive] = useState(false);

    const showMenu = ()=>{
        setMenuactive(!menuActive)
    }

    const menuItems =[
      {
        id:1,
        menu:"O нас",
        link:'/'
      },
      {
        id:2,
        menu:"женское",
        link:'woman'
      },
      {
        id:3,
        menu:"мужское",
        link:'man'
      },
      {
        id:4,
        menu:"детское",
        link:'children'
      },
      
    ]



  return (
    <nav className='navbar'>
      <div className="container navbar__container">
        <span className='navbar__logo'>красиВАУ</span>
        <button onClick={showMenu} className='navbar__toggle'>
          <img src={menuIcon} alt='burger-menu'></img>
        </button>
        <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
          {
            menuItems.map((menuItem)=>{
              return (
                <NavLink onClick={showMenu} to={menuItem.link} className="navbar__menu-link" key={menuItem.id}>{menuItem.menu}
                </NavLink>
              )
            }

            )
          }
           <NavLink to="/profile" className="navbar__menu-link" key="profile">
                        <img src={profileIcon} alt="Profile Icon" className=' navbar__profileIcon'/>
                    </NavLink>
                    
                    <NavLink to="/shopping" className="navbar__menu-link" key="shopping">
                        <img src={shoppingCart} alt="Shopping Cart" className=' navbar__shoppingCart'/>
                    </NavLink>
                    
        </div>

      </div>

    </nav>
  )
}

export default Navbar