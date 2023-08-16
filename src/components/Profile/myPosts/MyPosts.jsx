import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.css'
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    /*the data is in a file index.js*/
    let postsElements = props.postDate.map(p => {
        return <Post message={p.message} countLike={p.countLike}/>
    })


    let newPostElement = React.createRef();
    function addPostOnClick() {
        let textId = newPostElement.current.value;
        props.addPost(textId)
    }

    function addPostValue() {
        let textId = newPostElement.current.value;
        props.updateNewPostText(textId)
    }


    return (
            <div className={styles.container}>
                <h2>my posts</h2>
                <div>
                    <textarea ref={newPostElement} onChange={addPostValue} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostOnClick}>Post</button>
                </div>

                {postsElements}

            </div>
    )
}

export default MyPosts;