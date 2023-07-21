import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx';
import MessagesItem from "./MessagesItem/MessagesItem";



const Dialogs = (props) => {



    let diablogsElements = props.dialogsDate.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })
    let messagesElements = props.messagesDate.map(m => {
        return <MessagesItem id={m.id} message={m.message}/>
    })


    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_items}>
                    {diablogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>


    );
}
export default Dialogs;