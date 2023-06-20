import React from 'react';
import avatar from '../../ProfileInfo/img/avatar_offecerK.png'
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.post}>
            <img src={avatar}/>
            {props.message}
            <span>like {props.like}</span>
        </div>
    );
}
export default Post;