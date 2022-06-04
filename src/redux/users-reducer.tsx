import {ActionsType, UserPageType, UserType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const URL = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

let initialState = {
    users: [
        {id: 1, name: 'Ai',photoUrl: URL, followed: false, status: 'Have a nice day', location: {city: 'Kazan', country: 'Russia'}},
        {id: 2, name: 'Di',photoUrl: URL, followed: true, status: 'Hi there', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, name: 'Liza',photoUrl: URL, followed: true, status: 'Hallo', location: {city: 'Mexico', country: 'Mexico'}},

    ],
}

export const usersReducer = (state: UserPageType= initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)

