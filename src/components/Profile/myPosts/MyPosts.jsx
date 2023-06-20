import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
            <div className={s.container}>
                <h2>my posts</h2>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>

                <Post message='hello' like='3'/>
                <Post message='i am lonely' like='0'/>
            </div>
    )
}

export default MyPosts;