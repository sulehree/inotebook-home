import React from "react";

import {
  // BrowserRouter,
  // Routes,
  // Route,
  Link,
  useLocation,
} from "react-router-dom";
const Navbar = () => {
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo:
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  } `}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
