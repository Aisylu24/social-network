import {ActionsType} from "./redux-store";
import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
    profile: ProfileType | null
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi there', likesCount: 10},
        {id: 2, message: 'My first post', likesCount: 25}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionsType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfileThunkCreator = (userIdFromParams: string | undefined) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        profileAPI.getUserProfile(userIdFromParams)
            .then(data => {
              dispatch(setUserProfile(data))
            })

    }
    return thunk
}