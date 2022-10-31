// import React from "react";
// import { bestBuyList } from "../dummydata";
// import { useParams } from "react-router-dom";


// function SingleItem({ cart, setCart }) {
//   let { id } = useParams();
//   const item = bestBuyList[id]

//   const handleClick = () => {
//     setCart([...cart, item])
//   }


//   return(
//     <div>
//     <h1>{item.name}</h1>
//     <h4>{item.price}</h4>
//     <img src={item.img} alt={`this is a ${item.name}`} />
//     <h4>{item.description}</h4>
//     <button onClick={handleClick}>Add to Cart</button>
//     </div>
//   )
// }

// export default SingleItem;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleItem({ cart, setCart }) {
  let { id } = useParams()

  const [item, setItem] = useState("")

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${id}`)
      const json = await response.json()

      console.log(json);
      setItem(json)
    }

    fetchItem()
  }, [id])

  const handleClick = () => {
    setCart(cart => [...cart, item])
  }

  return (
    <div className='singleItemPage'>
      <h1>{item.name}</h1>
      <br />
      <img width='300' height='200' src={item.img} alt="item" />
      <br />
      <h4 id='singleItemDescription'>{item.description}</h4>
      <br />
      <h4>${item.price}</h4>
      <br />
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export default SingleItem;