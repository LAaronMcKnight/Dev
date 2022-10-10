import React from 'react'

function Card(props) {

  return(
    <>
    <h1>Current Pic</h1>
    
    <img id="images" src={props.images} alt="images" />

    </>
  )
}

export default Card