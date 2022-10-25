import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div>
      <Link to={'/' + item.id}>
        <div>{item.name}</div>
      </Link>
      <div>{item.price}</div>
      <img src={item.img} alt={`this is a ${item.name}`}></img>
      <div>{item.category}</div>
    </div>
  );
}

export default Item;
