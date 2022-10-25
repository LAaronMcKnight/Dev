import React from "react";
import { bestBuyList } from "../dummydata";
import { useParams } from "react-router-dom";


function SingleItem({ cart, setCart }) {
  let { id } = useParams();
  const item = bestBuyList[id]

  const handleClick = () => {
    setCart([...cart, item])
  }


  return(
    <div>
    <h1>{item.name}</h1>
    <h4>{item.price}</h4>
    <img src={item.img} alt={`this is a ${item.name}`} />
    <h4>{item.description}</h4>
    <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export default SingleItem;
