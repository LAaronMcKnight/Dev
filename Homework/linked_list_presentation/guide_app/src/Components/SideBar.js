import React from 'react'
import './../App.css'

function SideBar({ slideChange }) {
  return (
    <div className='sidebar'>
      <button onClick={() => slideChange(1)} id='btn' >Button</button>
      <button id='btn' >Button</button>
      <button id='btn' >Button</button>
      <button id='btn' >Button</button>
    </div>
  )
}

export default SideBar