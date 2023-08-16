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
            <form className="d-flex">
              <Link
                className={`btn btn-primary mx-2 ${
                  location.pathname === "/login" ? "active" : ""
                } `}
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className={`btn btn-primary mx-2 ${
                  location.pathname === "/signup" ? "active" : ""
                } `}
                to="/signup"
                role="button"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
