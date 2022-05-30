import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreContext} from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()

                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }

                const onMessageChange = (newMessage: string) => {
                    store.dispatch(updateNewMessageAC(newMessage))
                }

                return <Dialogs state={state.dialogsPage}
                                onChange={onMessageChange}
                                callBack={addMessage}
                />
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;