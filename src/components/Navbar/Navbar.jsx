import React from 'react';
import styles from './Navbar.module.css';

console.log(styles)

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li className={styles.item}><a href='#'>Profile</a></li>
                <li className={`${styles.item} ${styles.active}`}><a href='#'>Messages</a></li>
                <li className={styles.item}><a href='#'>News</a></li>
                <li className={styles.item}><a href='#'>Music</a></li>
            </ul>
        </div>
    );
}
export default Navbar;