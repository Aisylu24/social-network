import {ActionsType} from "./redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

export type InitialStatType = typeof initialState


export const dialogsReducer = (state: InitialStatType = initialState, action: ActionsType):InitialStatType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, messages: [...state.messages, {id: 4, message: action.newMessage}]}
        }
        default:
            return state
    }
}

export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)