import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'

//this code is working
const setActive = ({isActive}) => isActive ? s.active : "";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li className={s.item}><NavLink to='/' className = {setActive}>Profile</NavLink></li>
                <li className={s.item}><NavLink to='/dialogs' className = {setActive}>Messages</NavLink></li>
                <li className={s.item}><NavLink to='/news' className = {setActive}>News</NavLink></li>
                <li className={s.item}><NavLink to='/music' className = {setActive}>Music</NavLink></li>
                <li className={s.item}><NavLink to='/settings' className = {setActive}>Settings</NavLink></li>
            </ul>
        </div>
    );
}
export default Navbar;