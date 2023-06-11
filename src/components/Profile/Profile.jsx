import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (

        <div className={s.profile}>
            Avatar + desctiption
            <MyPosts/>
        </div>
    )
}

export default Profile;