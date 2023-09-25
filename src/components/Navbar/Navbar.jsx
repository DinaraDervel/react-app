import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <div className={s.sidebar}>
      <nav>
        <ul className={s.vertical_nav}>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/dialogs"
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/news"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/music"
            >
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/settings"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Friends state={props.friends} />
    </div>
  );
};

export default Navbar;
