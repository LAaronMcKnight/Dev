// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Item({ item }) {
//   let navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate(`/${item._id}`);
//   };

//   return (
//     <div onClick={handleNavigate} className="itemListing">
//       <div id='itemName'><h4>{item.name}</h4></div>
//       <br />
//       <div>${item.price}</div>
//       <div id='pageBreak' />
//       <br />
//       <img
//         width="300"
//         height="200"
//         src={item.img}
//         alt={`this is a ${item.name}`}
//       ></img>
//       <p id='itemCategory'>{item.category[0].toUpperCase() + item.category.slice(1)}</p>
//     </div>
//   );
// }

// export default Item;

import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${item._id}`);
  };

  const imageStyle = {
    maxWidth: '300px',
    maxHeight: '200px',
  }

  return (
    <div onClick={handleNavigate} className="itemListing">
      <div id='itemName'><h4>{item.name}</h4></div>
      <div id='pageBreak' />
      <br />
      <div>${item.price}</div>
      <br />
      <div id='pageBreak' />
      <br />
      <div id='picAndCat'>
      <img
        style={imageStyle}
        src={item.img}
        alt={`this is a ${item.name}`}
      ></img>
        <p id='itemCategory'>{item.category[0].toUpperCase() + item.category.slice(1)}</p>
      <br />
      </div>
    </div>
  );
}

export default Item;
