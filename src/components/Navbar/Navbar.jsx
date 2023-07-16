import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

//this code is working
const setActive = ({isActive}) => isActive ? styles.active : "";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li className={styles.item}><NavLink to='/' className = {setActive}>Profile</NavLink></li>
                <li className={styles.item}><NavLink to='/dialogs' className = {setActive}>Dialogs</NavLink></li>
                <li className={styles.item}><NavLink to='/news' className = {setActive}>News</NavLink></li>
                <li className={styles.item}><NavLink to='/music' className = {setActive}>Music</NavLink></li>
                <li className={styles.item}><NavLink to='/settings' className = {setActive}>Settings</NavLink></li>
            </ul>
        </div>
    );
}
export default Navbar;