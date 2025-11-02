import React from "react";
import styles from "./Header.module.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";

const NavRoute = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/impact">Impact</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavRoute;
