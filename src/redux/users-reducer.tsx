import {ActionsType} from "./store/redux-store";
import {usersAPI} from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SWITCH_FETCHING = 'SWITCH_FETCHING';
const SWITCH_FOLLOWING_PROGRESS = 'SWITCH_FOLLOWING_PROGRESS';

export type UserType = {
    followed: boolean
    id: number,
    name: string,
    photos: { small: null | string, large: null | string }
    status: null | string
    uniqueUrlName: null | string
}

export type InitialStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    isFollowing: []
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
        case SWITCH_FOLLOWING_PROGRESS: {
            return {
                ...state, isFollowing: action.isFollowingProgress
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const setFollow = (userId: number) => ({type: FOLLOW, userId} as const)
export const setUnfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const switchFetching = (isFetching: boolean) => ({type: SWITCH_FETCHING, isFetching} as const)
export const switchFollowingProgress = (isFollowingProgress: boolean, userId: number) => ({
    type: SWITCH_FOLLOWING_PROGRESS,
    isFollowingProgress,
    userId
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
const thunk = (dispatch: (action:ActionsType)=> void) => {

    dispatch(switchFetching(true))
    dispatch(setCurrentPage(currentPage))

    usersAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(switchFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })}
    return thunk
}

export const followThunkCreator = (userId: number) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        dispatch(switchFollowingProgress(true,userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setFollow(userId))
                }
                dispatch(switchFollowingProgress(false,userId))
            })}
        return thunk
    }

export const unfollowThunkCreator = (userId: number) => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        dispatch(switchFollowingProgress(true,userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUnfollow(userId))
                }
                dispatch(switchFollowingProgress(false,userId))
            })}
        return thunk
    }


