import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = () => {
    return (

        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;