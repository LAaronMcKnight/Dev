import React from "react";
// import { useState } from 'react'
// import { useLocation } from 'react-router-dom'

function ShoppingCart({ cart, setCart }) {

  // const location = useLocation()
  // const {cart, setCart} = location.state
  // console.log(location.state)

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id))
    console.log(cart)
  }

  return(
    <div>
      {cart && cart.map((item, i) => {
        return (
        <div key={i}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
        )
      })}
    </div>
  )
}

export default ShoppingCart;
