import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="mb-3 d-block mx-auto" src={logo} alt="" />
      <nav className="ps-5">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
