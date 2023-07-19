import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = () => {

    let postDate = [
        {message: 'hello', countLike: 4},
        {message: 'i am lonely', countLike: 34},

    ]
    let postsElements = postDate.map((p) =>{
        return <Post message={p.message} countLike={p.countLike}/>
    })

    return (
            <div className={styles.container}>
                <h2>my posts</h2>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>

                {postsElements}

            </div>
    )
}

export default MyPosts;