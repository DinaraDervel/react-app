import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          src="https://marketplace.canva.com/BEZO4/MADhH_BEZO4/3/tl/canva-asteroid-icon-MADhH_BEZO4.png"
          alt="logo"
        />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
