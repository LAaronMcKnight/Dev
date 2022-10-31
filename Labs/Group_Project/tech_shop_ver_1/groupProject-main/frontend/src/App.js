import "./index.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import SingleItem from "./pages/SingleItem";
import DisplayCart from './components/DisplayCart'
import { useState } from 'react'
import AuthPage from './pages/AuthPage'
import AddForm from './components/AddForm'
import UsedItems from './pages/UsedItems'

import { getUser } from './utilities/users-service'


function App() {

  const [cart, setCart] = useState([])

  const [user, setUser] = useState(getUser())


  return (
    <div className="App">
      { user ? (
      <Router>
        <div className='headerContent'>
          <div className='navBar'>
            <NavBar setUser={setUser} />
          </div>
          <DisplayCart cart={cart} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="used" element={<UsedItems />} />
          <Route path="/shoppingCart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
          <Route path="/:id" element={<SingleItem cart={cart} setCart={setCart}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>

      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
