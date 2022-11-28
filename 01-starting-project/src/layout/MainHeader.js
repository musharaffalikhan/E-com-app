import React from "react";
import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes["header-h1"]}>The Generics</h1>
      <nav>
        <ul className={classes["header-ul"]}>
          <li className={classes["header-li"]}>
            <NavLink
              activeClassName={classes.active}
              className={classes["header-ul-a"]}
              to="/home"
            >
              HOME
            </NavLink>
          </li>
          <li className={classes["header-li"]}>
            <NavLink
              activeClassName={classes.active}
              className={classes["header-ul-a"]}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li className={classes["header-li"]}>
            <NavLink
              activeClassName={classes.active}
              className={classes["header-ul-a"]}
              to="/store"
            >
              STORE
            </NavLink>
          </li>
          <li className={classes["header-li"]}>
            <NavLink
              activeClassName={classes.active}
              className={classes["header-ul-a"]}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
          <li className={classes["header-li"]}>
            <NavLink
              activeClassName={classes.active}
              className={classes["header-ul-a"]}
              to="/login"
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
