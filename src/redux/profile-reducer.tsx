import {ActionsType} from "./redux-store";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
    status: string
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
    profile: null,
    status: ""
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
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUserProfileThunkCreator = (userIdFromParams: string | undefined) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        if(!userIdFromParams) {
            userIdFromParams = '24346'
        }
        profileAPI.getUserProfile(userIdFromParams)
            .then(data => {
              dispatch(setUserProfile(data))
            })

    }
    return thunk
}
export const getUserStatusThunkCreator = (userIdFromParams: string | undefined) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        profileAPI.getUserStatus(userIdFromParams)
            .then(data => {
              dispatch(setStatus(data))
            })
    }
    return thunk
}

export const updateUserStatusThunkCreator = (status: string) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
    return thunk
}