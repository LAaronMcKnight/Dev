import { useState } from "react";
import Order from "./components/Order"
import Orders from "./components/Orders"
import allReceipts from "./models/receipt";
import "./korilla.css";
// import Cart from './components/Cart'

function App() {

  const [items, setItems] = useState(0)



  
  return (
    <div className="App">

      <div className='cart'>
      <img id='cartPng' src="https://findicons.com/files/icons/1681/siena/128/shopping_cart_blue.png" alt="Cart photo" />
      Cart Items: {items}
    </div>

      <Orders onOrder />
      <hr />
      <br />
      <Order />
        <div>
          <button onClick={() => setItems(items + 1)}>Add Order</button>
        </div>
    </div>
  );
}

export default App;