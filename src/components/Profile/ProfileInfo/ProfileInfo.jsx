import React from "react";
import avatar from './img/avatar_offecerK.png';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.imageBlock}>
                        <img src={avatar}/>
                    </div>
                    <div className={styles.discriptionBlock}>
                        Illusion is the first of all pleasures.
                    </div>
                </div>

            </div>
        );
}

export default ProfileInfo;