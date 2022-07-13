import {ActionsType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type DataStateType = {
    userId: null | number
    userEmail: null | string
    userLogin: null |string
    isAuth: boolean
}

let initialState: DataStateType = {
    userId: null,
    userEmail: null,
    userLogin: null,
    isAuth: false
}

export const authReducer = (state: DataStateType = initialState, action: ActionsType): DataStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataStateType) => ({type: SET_USER_DATA, data} as const)



