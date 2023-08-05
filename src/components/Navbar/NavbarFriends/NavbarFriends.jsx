import React from 'react';
import styles from './NavbarFriends.module.css';

const NavBarFriends = (props) => {
    return (
        <div className={styles.NavbarFriendsList}>
            <span>{props.name}</span>
        </div>
    )
}
export default NavBarFriends;