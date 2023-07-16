import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {

    let postDate = [
        {message: 'hello', countLike: 4},
        {message: 'i am lonely', countLike: 34},
    ]

    return (
            <div className={styles.container}>
                <h2>my posts</h2>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>

                <Post message={postDate[0].message} countLike={postDate[0].countLike}/>
                <Post message={postDate[1].message} countLike={postDate[1].countLike}/>
            </div>
    )
}

export default MyPosts;