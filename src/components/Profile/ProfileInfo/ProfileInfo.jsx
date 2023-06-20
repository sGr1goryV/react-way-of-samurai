import React from "react";
import avatar from './img/avatar_offecerK.png';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
        return (
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.imageBlock}>
                        <img src={avatar}/>
                    </div>
                    <div className={s.discriptionBlock}>
                        Illusion is the first of all pleasures.
                    </div>
                </div>

            </div>
        );
}

export default ProfileInfo;