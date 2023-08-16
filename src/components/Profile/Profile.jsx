import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './Profile.module.css';


const Profile = (props) => {



    return (

        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts postDate={props.profilePage.postDate}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;