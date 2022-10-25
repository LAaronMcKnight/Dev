import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
        <Link to="/shoppingCart">Cart</Link>
      </nav>
    </div>
  );
}

export default NavBar;
