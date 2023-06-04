import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <a href="#"><img src='https://www.neondystopia.com/wp-content/uploads/2016/07/bladerunnertitle2.jpg' className=""/></a>
        </div>
    );
}
export default Header;