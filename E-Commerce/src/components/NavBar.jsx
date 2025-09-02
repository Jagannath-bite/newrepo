import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="navSection">
          <div className="title">
            <h2>Emert</h2>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user">
            <div className="userDetail">SignIn/SignUp</div>
            <div className="cart">Cart</div>
          </div>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <li>Watches</li>
          <li>Men Fashion</li>
          <li>Women dress</li>
          <li>Furniture</li>
          <li>AC</li>
          <li>Books</li>
          <li>Fridge</li>
          <li>Speakers</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
