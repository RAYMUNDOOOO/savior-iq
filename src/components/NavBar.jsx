import { useState } from "react";
import styles from "/src/styles/navbar.module.css";
import SearchBar from "/src/components/Search";
import DefaultButton, {
  SignUpButton,
  LoginButton,
} from "/src/components/Buttons";

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
          <Link to="/" className={`${styles.logo}`}>
            <span>The Oracle </span>
          </Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/whiskey" className={`${styles.navLink}`}>
                Whiskey
              </Link>
            </li>

            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
          <div className={`${styles.rightContainer}`}>
            <SearchBar />
            <SignUpButton text="Sign up!" />
            <LoginButton text="Login" />
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
