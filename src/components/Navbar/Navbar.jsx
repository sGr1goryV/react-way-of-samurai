import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom'


console.log(styles)

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li className={`${styles.item} ${styles.active}`}><Link to='/'>Profile</Link></li>
                <li className={styles.item}><Link to='/dialogs'>Messages</Link></li>
                <li className={styles.item}><Link to='/news'>News</Link></li>
                <li className={styles.item}><Link to='/music'>Music</Link></li>
                <li className={styles.item}><Link to='/settings'>Settings</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;