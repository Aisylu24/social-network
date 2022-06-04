import React, {ChangeEvent} from 'react';
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
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessage: string
    }
    onClickCallBack: () => void
    onChangeCallBack: (newMessage: string) => void
}

const Dialogs = (props:DialogPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d=> <DialogItem key={d.id} name={d.name} id={d.id}/> )
    let messageElements = props.dialogsPage.messages.map(m=> <Message key={m.id} message={m.message}/> )

    const addMessage = () => {
        props.onClickCallBack()
    }

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = event.currentTarget.value
        props.onChangeCallBack(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
               <div>{messageElements}</div>
                <div>
            <div><textarea
                placeholder={'Enter your message'}
                value={props.dialogsPage.newMessage} onChange={onMessageChange}/></div>
            <div><button onClick={addMessage}>send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;