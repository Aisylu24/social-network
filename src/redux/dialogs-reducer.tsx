import {ActionsType, DialogsPageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Zarina'},
        {id: 2, name: 'Guzel'},
        {id: 3, name: 'Liza'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Are you ok?'}
    ],
    newMessage: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, newMessage: '', messages: [...state.messages, {id: 4, message: state.newMessage,}]}
        }
        case UPDATE_NEW_MESSAGE: {
            return {...state, newMessage: action.newMessage}
        }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE, newMessage} as const)