import React from 'react';
import styles from "../Dialogs.module.css";

const MessagesItem = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}
export default MessagesItem;