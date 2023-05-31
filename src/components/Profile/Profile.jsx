import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (

        <div className={styles.profile}>
            Avatar + desctiption
            <MyPosts/>
        </div>
    )
}

export default Profile;