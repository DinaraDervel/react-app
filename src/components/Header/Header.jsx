import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className={s.logo}><img src="https://marketplace.canva.com/BEZO4/MADhH_BEZO4/3/tl/canva-asteroid-icon-MADhH_BEZO4.png" alt='logo' /></div>
      </header>;
}

export default Header;