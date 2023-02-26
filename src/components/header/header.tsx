import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    const closeMenu = () => setOpenMenu(false);
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="header_logo mb-0 ">
            <Link to="/">
              <img src="/logo-letter-dark.png.svg" />
            </Link>
          </h1>
          <div className="burgerBtn d-block d-md-none pointer">
            <svg
              onClick={e => {
                e.stopPropagation();
                setOpenMenu(!openMenu);
              }}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 30H5V26.6667H35V30ZM35 21.6667H5V18.3333H35V21.6667ZM35 13.3333H5V10H35V13.3333Z"
                fill="white"
              />
            </svg>
          </div>
          <nav
            className={classNames(" d-md-flex header_menu", {
              openMobileNav: openMenu,
            })}
          >
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
