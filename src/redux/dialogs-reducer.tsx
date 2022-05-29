import {ActionsType, DialogsPageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage,
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE, newMessage} as const)