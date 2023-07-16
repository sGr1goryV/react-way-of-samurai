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

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_items}>
                    <DialogItem id={dialogsDate[0].id} name={dialogsDate[0].name} />
                    <DialogItem id={dialogsDate[1].id} name={dialogsDate[1].name}/>
                    <DialogItem id={dialogsDate[2].id} name={dialogsDate[2].name}/>
                    <DialogItem id={dialogsDate[3].id} name={dialogsDate[3].name}/>
                    <DialogItem id={dialogsDate[4].id} name={dialogsDate[4].name}/>
                </div>
                <div className={styles.messages}>
                    <MessagesItem id={messagesDate[0].id} message={messagesDate[0].message}/>
                    <MessagesItem id={messagesDate[1].id} message={messagesDate[1].message}/>
                    <MessagesItem id={messagesDate[2].id} message={messagesDate[2].message}/>
                </div>
            </div>
        </div>


    );
}
export default Dialogs;