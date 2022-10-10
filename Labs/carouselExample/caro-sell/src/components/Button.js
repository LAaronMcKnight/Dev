import React from 'react'

function Button(props) {

  return(
    <>
    <button onClick={props.picToggle}>{props.symbols}</button>
    
    </>
  )
}

export default Button