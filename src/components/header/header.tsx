import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="header_logo mb-0 ">
            <Link to="/">
              <img src="/logo-letter-dark.png.svg" />
            </Link>
          </h1>
          <nav className="header_menu">
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wightpaper">WightPaper</Link>
              </li>
            </ul>
            <Link className="btn btn-primary" to="/register">
              Get Started
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer>
        <div className="container">
          <span>Copyright© VPNcrypto - All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};
