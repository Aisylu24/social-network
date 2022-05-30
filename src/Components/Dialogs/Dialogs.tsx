import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {ActionsType} from "../../redux/store";


type DialogType = {
    id: number
    name:string
}

type MessageType = {
    id: number
    message:string
}

type DialogPropsType = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessage: string
    }
    dispatch: (action: ActionsType)=> void
}

const Dialogs = (props:DialogPropsType) => {

    let dialogElements = props.state.dialogs.map(d=> <DialogItem name={d.name} id={d.id}/> )
    let messageElements = props.state.messages.map(m=> <Message message={m.message}/> )

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }


    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = event.currentTarget.value
        props.dispatch(updateNewMessageAC(newMessage))
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
                value={props.state.newMessage} onChange={onMessageChange}/></div>
            <div><button onClick={addMessage}>send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;