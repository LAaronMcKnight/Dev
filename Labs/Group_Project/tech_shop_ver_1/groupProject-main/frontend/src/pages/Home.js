import React from "react";
import { bestBuyList } from "../dummydata";
import Item from "../components/Item";

function Home() {
  return (
    <>
      <div>Home</div>
      {bestBuyList.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </>
  );
}

export default Home;
