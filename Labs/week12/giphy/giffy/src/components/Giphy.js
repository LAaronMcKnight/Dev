import React from 'react'
import Button from './Button'



function Giphy({ onClick, randomGifs, getRandomGifs }) {


    onClick = ()=> {
      getRandomGifs()
    }

  return (
    <div>
      <h1>FunGif</h1>
      <Button color={'goldenrod'} text={'Give me a random gif!'} onClick={onClick} />
      <div> &nbsp;  </div>
      {randomGifs && <div className="randomGif">
        <img id="pic" src={randomGifs.data.images.downsized_medium.url} alt={randomGifs.data.title} />
        <h4>{randomGifs.data.title}</h4>
      </div>}
      
    </div>
  )
  
}

export default Giphy



// function Giphy({ onClick, randomGifs, getRandomGifs }) {

  

//   const loaded = () => {


//     onClick = ()=> {
//       getRandomGifs()
//     }

//   return (
//     <div>
//       <h1>Giphy Component</h1>
//       <Button color={'goldenrod'} text={'Give me a random gif!'} onClick={onClick} />
//       <div> &nbsp;  </div>
//       <div className="randomGif">
//         <img src={randomGifs.data.images.downsized_medium.url} alt={randomGifs.data.title} />
//         <h4>{randomGifs.data.title}</h4>
//       </div>
      
//     </div>
//   )
//   }

//   const loading = () => {
//     return <h2>Loading . . .</h2>
//   }

//   return randomGifs ? loaded() : loading();
// }

// export default Giphy