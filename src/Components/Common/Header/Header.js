import React from "react";
import "./Header.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <NavLink to="/">
          <p className="link">Home</p>
        </NavLink>
        <NavLink to="/compare">
          <p className="link">Compare</p>
        </NavLink>
        <NavLink to="/watchlist">
          <p className="link">Watchlist</p>
        </NavLink>
        <NavLink to="/dashboard">
          <Button text={"Dashboard"} onClick={() => console.log("cli")} />
        </NavLink>
      </div>

      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
