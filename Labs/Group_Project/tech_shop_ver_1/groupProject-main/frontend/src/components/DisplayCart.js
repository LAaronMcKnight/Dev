import React from 'react'
import { Link } from 'react-router-dom'

function DisplayCart({ cart }) {
  return (
    <div>
      <Link to={"/shoppingCart"}>My Cart ({cart.length})</Link>
      
      
    </div>
  )
}

export default DisplayCart