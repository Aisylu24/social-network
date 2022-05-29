const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessage,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessage = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber(this._state)

        }
    }
}

export type ActionsType = addPostACType
    | updateNewPostTextACType
    | addMessageACType
    | updateNewMessageACType

export const addPostAC = () => ({type: ADD_POST} as const)

type addPostACType = ReturnType<typeof addPostAC>

export const updateNewPostTextAC = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText} as const)

type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)

type addMessageACType = ReturnType<typeof addMessageAC>

export const updateNewMessageAC = (newMessage: string) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage} as const)

type updateNewMessageACType = ReturnType<typeof updateNewMessageAC>


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
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

export type DialogsPage = {
    dialogs: DialogsType[],
    messages: MessagesType[]
    newMessage: string
}

export type SideBarType = {}

// export let state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi there', likesCount: 10},
//             {id: 2, message: 'My first post', likesCount: 25}
//         ],
//         newPostText: ''
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Zarina'},
//             {id: 2, name: 'Guzel'},
//             {id: 3, name: 'Liza'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'What\'s up?'},
//             {id: 3, message: 'Are you ok?'}
//         ]
//     },
//     sidebar: {}
// }


// export let addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree()
// }


// export let updateNewPostText = (newText:string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree()
// }
//
// export let subscribe = (observer: any) => {
//     rerenderEntireTree = observer
// }


