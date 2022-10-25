import "./index.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import SingleItem from "./pages/SingleItem";
import DisplayCart from './components/DisplayCart'
import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import { getUser } from './utilities/users-service'


function App() {

  const [cart, setCart] = useState([])

  const [user, setUser] = useState(getUser())


  return (
    <div className="App">
      { user ? (
      <Router>
        <NavBar />
        <DisplayCart cart={cart} />
        <>
        <p>cart: {cart.length}</p>
        </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoppingCart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          <Route path="/:id" element={<SingleItem cart={cart} setCart={setCart}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>

      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
