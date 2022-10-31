import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'

function DisplayCart({ cart }) {

  const myStyle = {
    height: '40px',
    width: '40px'
  }

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/shoppingCart`);
  };

  return (
    <div onClick={handleNavigate} className='displayCart'>
      <div className='cartText'>
        My Cart ({cart.length})
      </div>
      <div className='cartIcon'>
      <BsFillCartFill style={myStyle} />
      </div>
    </div>
  )
}

export default DisplayCart