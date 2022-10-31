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
    <div className='cartPage'>
      {cart && cart.map((item, i) => {
        return (
        <div key={i}>
          {item.name}
          <br />
          <img src={item.img} />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
        )
      })}
    </div>
  )
}

export default ShoppingCart;


//yu's code below
// import React from "react";

// function ShoppingCart({ cart, setCart }) {

//   const handleDelete = (id) => {
//     setCart(cart.filter(item => item.id !== id))
//   }

//   return (
//     <div>
//       {cart && cart.map((item) => (
//         <div key={item._id}>
//           <div>{item.name} x 1 <span onClick={() => handleDelete(item._id)}>delete</span></div>
//         </div>

//       ))}
//     </div>
//   );
// }

// export default ShoppingCart;