import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogPropsType = {
    store: StoreType
}

const DialogsContainer = (props:DialogPropsType) => {

    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onMessageChange = (newMessage:string) => {
        props.store.dispatch(updateNewMessageAC(newMessage))
    }

    return <Dialogs state={state.dialogsPage}
                    onChange={onMessageChange}
                    callBack={addMessage}

    />
};

export default DialogsContainer;