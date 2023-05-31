import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.post}>
            <img src="https://www.film.ru/sites/default/files/filefield_paths/blade-runner-2049.jpg"/>
            {props.message}
            <span>like {props.like}</span>
        </div>
    );
}
export default Post;