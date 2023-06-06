import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <ul class={s.vertical_nav}>
      <li><a class={s.active} href="#a">Profile</a></li>
      <li><a href="#a">Messages</a></li>
      <li><a href="#a">News</a></li>
      <li><a href="#a">Music</a></li>
      <li><a href="#a">Settings</a></li>
    </ul>
  </nav>;
}

export default Navbar;