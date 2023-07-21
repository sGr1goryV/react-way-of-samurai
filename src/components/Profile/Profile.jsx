import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from './Profile.module.css';


const Profile = (props) => {



    return (

        <div className={style.profile}>
            <ProfileInfo/>
            <MyPosts postDate={props.postDate}/>
        </div>
    )
}

export default Profile;