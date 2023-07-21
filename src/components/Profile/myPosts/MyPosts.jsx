import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = (props) => {

    /*the data is in a file index.js*/
    let postsElements = props.postDate.map((p) =>{
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