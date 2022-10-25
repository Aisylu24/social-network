import {ActionsType} from "./store/redux-store";
import {authMeAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type DataStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: DataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: DataStateType = initialState, action: ActionsType): DataStateType => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserData = (payload: DataStateType) => ({type: SET_USER_DATA, payload} as const)

export const getAuthUserDataThunkCreator = () => async (dispatch: (action: ActionsType) => void) => {
    let data = await authMeAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData({id, login, email, isAuth: true}))
    }
}

export const loginThunkCreator = (email: string, login: string, rememberMe: boolean) => async (dispatch: any) => {
    let data = await authMeAPI.login(email, login, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutThunkCreator = () => async (dispatch: (action: { payload: DataStateType; type: string }) => void) => {
    let data = await authMeAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}

