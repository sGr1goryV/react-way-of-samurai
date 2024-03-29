import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx';
import MessagesItem from "./MessagesItem/MessagesItem";



const Dialogs = (props) => {



    let dialogsElements = props.stateDates.dialogsDate.map(d => {
        return <DialogItem id={d.id} name={d.name}/>
    })
    let messagesElements = props.stateDates.messagesDate.map(m => {
        return <MessagesItem id={m.id} message={m.message}/>
    })

    let newMessagesElement = React.createRef();

    function addMessage() {
        let messageId = newMessagesElement.current.value;
        alert(messageId);
    }

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_items}>
                    {dialogsElements}
                </div>
                <div>
                    <textarea ref={newMessagesElement}></textarea>
                    <button onClick={addMessage}>send</button>
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>


    );
}
export default Dialogs;