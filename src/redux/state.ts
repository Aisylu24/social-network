export let store = {
    _state: <RootStateType> {
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
},
    getState() {
        return this._state
    },
    _callSubscriber(_state: RootStateType)  {
        console.log('state changed')
    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText:string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any)  {
        this._callSubscriber = observer
    }

}





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


