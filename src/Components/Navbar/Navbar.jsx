import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown_2.png'
import { context } from '../../App'

function Navbar({ isLoggedIn }) {

  const [isContainerVisible, setContainerVisibility] = useState(false);
  const containerRef = useRef(null);

  const handleUserIconClick = () => {
    setContainerVisibility(!isContainerVisible);
  };

  // const handleClickOutsideContainer = (event) => {
  //   if (containerRef.current && !containerRef.current.contains(event.target)) {
  //     setContainerVisibility(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mouseclick', handleClickOutsideContainer);
  //   return () => { 
  //     document.removeEventListener('mouseclick', handleClickOutsideContainer);
  //   };
  // }, []);

  const { userFound } = useContext(context)

  const [menu, setMenu] = useState("shop")
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {isLoggedIn ? <>
          <Link to='/logout'><button>LogOut</button> </Link>

          <div className=' user-detail'>

            <div className="user-icon" onClick={handleUserIconClick}>
              <FontAwesomeIcon className='icon' icon={faUser} />
            </div>

            {isContainerVisible && (
              <div className="user-text" ref={containerRef}>
                <h1> User Details </h1>
                <div className="text">UserName</div>
                <input type="text" className="inp-text" disabled="disabled" value={userFound.name} />
                <div className="text">Phone</div>
                <input type="text" className="inp-text" disabled="disabled" value={userFound.phone} />
                <div className="text">Email</div>
                <input type="text" className="inp-text" disabled="disabled" value={userFound.email} />
                <div className="text">Password</div>
                <input type="password" className="inp-text" disabled="disabled" value={userFound.password} />
                {/* <div className="text">UserName : {userFound.name}</div> */}
                {/* <div className="text">Phone : {userFound.phone}</div> */}
                {/* <div className="text">Email : {userFound.email}</div> */}
                {/* <div className="text">Password : {userFound.password}</div> */}
                <button className='user-btn' onClick={() => setContainerVisibility(false)}>Close</button>
              </div>
            )}

          </div>

        </> : <Link to='/login'><button>Login</button></Link>}

        <Link to='/registration'><button>Registration</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
