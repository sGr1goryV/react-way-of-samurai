import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return(
        <div className={styles.post}>
            <img src="https://www.film.ru/sites/default/files/filefield_paths/blade-runner-2049.jpg"/>
            hello
            <span>like</span>
        </div>
    );
}
export default Post;