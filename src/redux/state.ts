import {rerenderEntireTree} from "../render";


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
}

export type SideBarType = {}


export let state: RootStateType = {
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
        ]
    },
    sidebar: {}
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}


export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
