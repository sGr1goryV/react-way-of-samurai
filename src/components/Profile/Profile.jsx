import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css';

const Profile = () => {
    return (

        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;