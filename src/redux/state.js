import {rerenderEntireTree} from "./render";

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi there', likesCount: 10},
            {id: 2, message: 'My first post', likesCount: 25}
        ],
        newPostText: 'new'
    },
    messagesPage: {
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
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
}
