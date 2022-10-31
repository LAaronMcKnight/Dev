// import React from "react";
// import { bestBuyList } from "../dummydata";
// import Item from "../components/Item";

// function Home() {
//   return (
//     <>
//       <div>Home</div>
//       {bestBuyList.map((item, i) => (
//         <Item item={item} key={i} />
//       ))}
//     </>
//   );
// }

// export default Home;
import SideBar from './../components/SideBar'
import React, { useState, useEffect } from "react";
import Item from "../components/Item";

function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
        const response = await fetch('/api/items/')
        const json = await response.json()

        if (response.ok) {
            setItems(json)
        }
        // console.log(items);
    }

    fetchItems()
}, [])

  const [cart, setCart] = useState([])

  return (
    <div className='home'>
      <SideBar items={items} setItems={setItems}/>
    <div className='itemListings'>
      {items.map((item, i) => {
          return (
            <Item item={item} key={item._id} cart={cart} setCart={setCart} />
          )
      })}
      </div>
      </div>
  );
}

export default Home;