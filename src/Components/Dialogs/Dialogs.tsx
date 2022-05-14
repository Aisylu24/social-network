import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";

const Dialogs = (props:any) => {

    let dialogs = [
        {id: 1, name: 'Zarina'},
        {id: 2, name: 'Guzel'},
        {id: 3, name: 'Liza'}
    ]

    let messages = [
        {id: 1,message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Are you ok?'}
    ]

    let dialogElements = dialogs.map(d=> <DialogItem name={d.name} id={d.id}/> )
    let messageElements = messages.map(m=> <Message message={m.message}/> )

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