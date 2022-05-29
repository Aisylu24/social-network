import {addPostACType, profileReducer, updateNewPostTextACType} from "./profile-redicer";
import {addMessageACType, dialogsReducer, updateNewMessageACType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export let store = {
    _state: <RootStateType>{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi there', likesCount: 10},
                {id: 2, message: 'My first post', likesCount: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(_state: RootStateType) {
        console.log('state changed')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

export type ActionsType = addPostACType
    | updateNewPostTextACType
    | addMessageACType
    | updateNewMessageACType

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[]
    newMessage: string
}

export type SideBarType = {}



