import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type DialogPropsType = {
    dialogsPage: {
        dialogs: DialogType[]
        messages: MessageType[]
        newMessage: string
    }
    addMessage: (newMessage:string) => void
}

const Dialogs = (props: DialogPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogElements}</div>
                <div className={s.messages}>
                    <div>{messageElements}</div>
                </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
            </div>
            <div>
                    <button>Send</button>
            </div>
        </form>
    )}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)