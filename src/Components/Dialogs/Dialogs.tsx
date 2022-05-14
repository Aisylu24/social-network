import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogType = {
    id: number
    name:string
}

type MessageType = {
    id: number
    message:string
}

type DialogPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

const Dialogs = (props:DialogPropsType) => {

    let dialogElements = props.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/> )
    let messageElements = props.messages.map(m=> <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;