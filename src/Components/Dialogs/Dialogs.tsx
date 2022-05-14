import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";

const Dialogs = (props:any) => {

    let dialogsData = [
        {id: 1, name: 'Zarina'},
        {id: 2, name: 'Guzel'},
        {id: 3, name: 'Liza'}
    ]

    let messageData = [
        {id: 1,message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Are you ok?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;