import React from "react";
import "./Header.css";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header__searchIcon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onclick={handleAuthentication} className="header__option">
            <span className="header__optionLine1">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          {" "}
          <div className="header__option">
            {" "}
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          {" "}
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          {" "}
          <div className="header_optionBasket">
            <ShoppingBasket></ShoppingBasket>
            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
