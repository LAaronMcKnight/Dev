import { useState } from 'react'

function Cart({ added }) {

  const cart = {
    items: 3
  }
  return (
    <div className='cart'>
      <img id='cartPng' src="https://findicons.com/files/icons/1681/siena/128/shopping_cart_blue.png" alt="Cart photo" />
      Cart Items: {cart.items}
    </div>
  )
}

export default Cart