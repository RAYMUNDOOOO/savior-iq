import { useState } from "react";
import styles from "/src/styles/navbar.module.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="/" className={`${styles.logo}`}>
            The Oracle{" "}
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="/about" className={`${styles.navMenu}`}>
                About
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/whiskey" className={`${styles.navMenu}`}>
                Whiskey
              </a>
            </li>

            <li onClick={removeActive}>
              <a href="/contact" className={`${styles.navMenu}`}>
                Contact
              </a>
            </li>

            {/* <li onClick={removeActive}>
              <Link to="/about.jsx" className={`${style.navLink}`}>
                About
              </Link>
            </li>

            <li onClick={removeActive}>
              <a href="#home" className={`${style.navLink}`}>
                Test
              </a>
            </li> */}
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
