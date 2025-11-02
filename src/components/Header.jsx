import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg";
import NavRoute from "./NavRoute";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Header_container}>
          <img src={logo} alt={logo} />
          <NavRoute />
          <div className={styles.BtnContainer}>
            <Link to="/SignIn">
              <button className={styles.SignIn_btn}>Sign In</button>
            </Link>
            <Link to="/SignUp">
              <button className={styles.SignUp_btn}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
