import {ActionsType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Zarina'},
        {id: 2, name: 'Guzel'},
        {id: 3, name: 'Liza'}
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Are you ok?'}
    ] as MessagesType[],
    newMessage: ''
}

export type InitialStatType = typeof initialState


export const dialogsReducer = (state: InitialStatType = initialState, action: ActionsType):InitialStatType => {
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