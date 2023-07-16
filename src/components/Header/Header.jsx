import React from 'react';
import styles from './Header.module.css';
import logo from './img/logo_br.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <a href="#"><img src={logo}/></a>
        </div>
    );
}
export default Header;