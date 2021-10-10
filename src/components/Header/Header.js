import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="mb-3 d-block mx-auto" src={logo} alt="" />
      <nav className="text-center">
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

        {user?.email && <img style={{ width: "25px", borderRadius: "50%" }} src={user?.photoURL} alt="" />}
      </nav>
    </div>
  );
};

export default Header;
