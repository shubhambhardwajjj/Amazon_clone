import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateprovider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const logout = () => {
    console.log("logged out");
    if (user) auth.signOut();
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="logo"
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt="logo"
          />
        </Link>
        <div className="header-search">
          <input className="header-input" type="text"></input>
          <button className="search-btn">
            <SearchIcon />
          </button>
        </div>

        <div className="header-nav">
          <div onClick={logout} className="header-option">
            <span className="header-option-first">
              Hello {user ? user.email : "GUEST"}
            </span>
            <Link to={!user && "/login"}>
              <span className="header-option-second">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </Link>
          </div>
          <div className="header-option">
            <span className="header-option-first">Return</span>
            <span className="header-option-second">Orders</span>
          </div>

          <div className="header-option">
            <span className="header-option-first">Your</span>
            <span className="header-option-second">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header-option">
              <span className="header-option-first">{basket.length}</span>
              <span className="header-option-second">
                <ShoppingBasketIcon />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
