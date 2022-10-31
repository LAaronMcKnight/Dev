import React from "react";
import { Link } from "react-router-dom";
import SignOutBtn from "./SignOutBtn";


function NavBar({ setUser }) {
  return (
    <div className='navbarReturn'>
      <nav>
        <Link to="/">Home</Link>&nbsp; | &nbsp; 
        <Link to="/about">About</Link>&nbsp; | &nbsp;
        <Link to ="/used">Used Items</Link>&nbsp; |  &nbsp;
        {/* <Link to="/shoppingCart">Cart</Link>&nbsp;&nbsp; */}
        <Link to="/add">Submit Item</Link>&nbsp; 
        <SignOutBtn setUser={setUser} />
      </nav>
      <br />
    </div>
  );
}

export default NavBar;
