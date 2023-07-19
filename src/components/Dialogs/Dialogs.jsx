import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={/dialogs/ + props.id} >{props.name}</NavLink>
        </div>
    );

}

const MessagesItem = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogsDate = [
        {id: 1, name: 'Joy'},
        {id: 2, name: 'Officer'},
        {id: 3, name: 'Butters'},
        {id: 4, name: 'Kartman'},
        {id: 5, name: 'Patrick'},
    ]

    let messagesDate = [
        {id: 1, message: 'oh you don\'t even smile'},
        {id: 2, message: 'you got damn right'},
        {id: 3, message: 'why?'}
    ]

    let diablogsElements = dialogsDate.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })
    let messagesElements = messagesDate.map(m => {
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