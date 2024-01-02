import React from "react";
import "./Header.css";
import { a } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <p className="link">Dashboard</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
