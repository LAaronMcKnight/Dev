import React from 'react'

function SlideDisplay({ slide }) {



  return (
    <>
    { 
    <div className='presentationInfo'>
      <img src={slide[0].img} alt='' />
    </div>
    }
    </>
  )
}

export default SlideDisplay