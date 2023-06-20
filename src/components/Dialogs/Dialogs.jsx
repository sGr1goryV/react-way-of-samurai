import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={/dialogs/ + props.id} >{props.name}</NavLink>
        </div>
    );
}

const MessagesItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <DialogItem name='Joy' id='1'/>
                    <DialogItem name='Officer K' id='2'/>
                    <DialogItem name='Butters' id='3'/>
                    <DialogItem name='Kartman' id='4'/>
                    <DialogItem name='Patrick' id='5'/>
                </div>
                <div className={s.messages}>
                    <MessagesItem message="oh you don't even smile"/>
                    <MessagesItem message='you got damn right'/>
                    <MessagesItem message='why?'/>
                </div>
            </div>
        </div>


    );
}
export default Dialogs;