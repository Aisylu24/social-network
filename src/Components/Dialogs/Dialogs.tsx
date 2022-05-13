import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";

const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Zarina'} id={1}/>
                <DialogItem name={'Guzel'} id={2}/>
                <DialogItem name={'Liza'} id={3}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'What\'s up?'}/>
                <Message message={'Are you ok?'}/>
            </div>
        </div>
    );
};

export default Dialogs;