import {ActionsType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

export type UserType = {
    followed: boolean
    id: number,
    name: string,
    photos: {small: null | string, large: null | string}
    status: null | string
    uniqueUrlName: null | string
}

export type InitialStateType = {
    users: UserType[]
}

let initialState:InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
            // return {...state, users: action.users.map(u => u)}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

