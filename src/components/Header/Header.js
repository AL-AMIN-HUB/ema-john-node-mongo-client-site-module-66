import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import useFirebase from "../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="header">
      <img className="mb-3 d-block mx-auto" src={logo} alt="" />
      <nav className="ps-5">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user?.email ? (
          <NavLink onClick={logOut} to="/login">
            Log out
          </NavLink>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
