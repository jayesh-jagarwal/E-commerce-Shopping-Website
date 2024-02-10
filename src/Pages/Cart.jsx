import React from 'react'
import CartItems from '../Components/CartItems/CartItems'

const Cart = ( {isLoggedIn} ) => {
  return (
   <div>
    <CartItems isLoggedIn={isLoggedIn} />
   </div>
  )
}

export default Cart
