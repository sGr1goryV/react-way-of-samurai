import React from "react";
import styles from '../Profile.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={styles.container_posts}>
                <h2>my posts</h2>
                <textarea></textarea>
                <button>Post</button>
                <Post message='hello' like='3'/>
                <Post message='i am lonely' like='0'/>
            </div>
    )
}

export default MyPosts;