import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
       <IconContext.Provider value={{ color: "#fff" }}>
      <div className="w-full bg-black">
     
        <nav className="navbar w-full">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiRocketThruster className="navbar-icon" />
              Skye
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                 Profile
                </NavLink>
                </li>
               
                </ul>
            </div>
            <div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <div className="flex ">
                  
                  <div className="flex-1">
              <li className="text-xs inline-flex whitespace-pre">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links " + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                Log In
                </NavLink>
                    </li>
                  </div>
                  <div className="flex-1">
              <li className=" text-xs inline-flex whitespace-pre">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                <p> Register</p>
                </NavLink>
                    </li>
                    </div>
                  </div>
            </ul>
          </div>
        </nav>
      
        </div>
          </IconContext.Provider>
    </>
  );
}

export default Navbar;
