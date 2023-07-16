import React from 'react';
import avatar from '../../ProfileInfo/img/avatar_offecerK.png'
import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.post}>
            <img src={avatar}/>
            <span className={styles.message_Class}>{props.message}</span>
            <span className={styles.like_Class}>like {props.countLike}</span>
        </div>
    );
}
export default Post;