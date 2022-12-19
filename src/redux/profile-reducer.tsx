import {ActionsType} from "./store/redux-store";
import {profileAPI} from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST';
const DELETE_POST = 'PROFILE/DELETE-POST';
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'PROFILE/SET_STATUS';
const SAVE_PHOTO = 'PROFILE/SAVE_PHOTO';

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
    "photos": PhotosType
}

export type PhotosType = {
    "small": null | string
    "large": null | string

}

export type ProfilePageType = {
    posts: PostType[],
    profile: ProfileType | null
    status: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi there', likesCount: 10},
        {id: 2, message: 'My first post', likesCount: 25}
    ],
    profile: null,
    status: ""
}

export type ProfileActionsType = ReturnType<typeof setStatus>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof savePhoto>


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePostAC = (postId: number) => ({type: DELETE_POST, postId} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhoto = (photos: PhotosType) => ({type: SAVE_PHOTO, photos} as const)

export const getUserProfileThunkCreator = (userIdFromParams: string | undefined) => async (dispatch: (action: ActionsType) => void) => {
    let data = await profileAPI.getUserProfile(userIdFromParams)
    dispatch(setUserProfile(data))
}
export const getUserStatusThunkCreator = (userIdFromParams: string | undefined) => async (dispatch: (action: ActionsType) => void) => {
    let data = await profileAPI.getUserStatus(userIdFromParams)
    dispatch(setStatus(data))

}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: (action: ActionsType) => void) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhotoThunkCreator = (file: File) => async (dispatch: (action: ActionsType) => void) => {
    let data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
        dispatch(savePhoto(data.photos))
    }
}
