import React from "react";
import Post from "./Post/Post";
import styles from './MyPosts.module.css'

const MyPosts = (props) => {

    /*the data is in a file index.js*/
    let postsElements = props.stageDates.postDate.map((p) =>{
        return <Post message={p.message} countLike={p.countLike}/>
    })


    let newPostElement = React.createRef();
    function addPost() {
        let textId = newPostElement.current.value;
        alert(textId)
    }

    return (
            <div className={styles.container}>
                <h2>my posts</h2>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Post</button>
                </div>

                {postsElements}

            </div>
    )
}

export default MyPosts;