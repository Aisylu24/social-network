import {ActionsType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SWITCH_FETCHING = 'SWITCH_FETCHING';

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
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState:InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount:0,
    currentPage: 2,
    isFetching: true
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
            return {...state, users: action.users}
            // return {...state, users: action.users.map(u => u)}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case SWITCH_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCountAC= (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const switchFetchingAC= (isFetching:boolean) => ({type: SWITCH_FETCHING, isFetching } as const)



