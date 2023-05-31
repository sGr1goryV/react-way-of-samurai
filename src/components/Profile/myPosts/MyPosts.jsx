import React from "react";
import styles from '../Profile.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={styles.posts}>
                <h2>my posts</h2>
                <textarea></textarea>
                <button>Post</button>
                <Post/>
                <Post/>
                <Post/>
            </div>
    )
}

export default MyPosts;