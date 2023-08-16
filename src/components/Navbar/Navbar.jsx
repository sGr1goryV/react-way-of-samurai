import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import NavbarFriends from "./NavbarFriends/NavbarFriends";

//this code is working
const setActive = ({isActive}) => isActive ? styles.active : "";

const Navbar = (props) => {

    let friendsElements = props.stateDates.friendsDate.map(f => {
         return <NavbarFriends name = {f.name}/>
     })

    return (
        <div className={styles.navbar}>
            <ul>
                <li className={styles.item}><NavLink to='/' className = {setActive}>Profile</NavLink></li>
                <li className={styles.item}><NavLink to='/dialogs' className = {setActive}>Dialogs</NavLink></li>
                <li className={styles.item}><NavLink to='/news' className = {setActive}>News</NavLink></li>
                <li className={styles.item}><NavLink to='/music' className = {setActive}>Music</NavLink></li>
                <li className={styles.item}><NavLink to='/settings' className = {setActive}>Settings</NavLink></li>
                <li className={styles.item}><NavLink to='/friends' className = {setActive}>
                    Friends
                    <span className={styles.itemsFriends}>{friendsElements}</span></NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;