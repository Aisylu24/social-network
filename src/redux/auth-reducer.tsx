import {ActionsType} from "./redux-store";
import {authMeAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

export type DataStateType = {
    id: null | number
    email: null | string
    login: null |string
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

export const getAuthUserDataThunkCreator = () => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        authMeAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData({...data.data, isAuth: true}))
                }
            })
    }
    return thunk
}

export const loginThunkCreator = (email:string, login:string, rememberMe:boolean) => (dispatch:any)  => {

        authMeAPI.login(email, login, rememberMe)
            .then(data => {
                console.log(data);
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

export const logoutThunkCreator = () => {
    const thunk = (dispatch: (action: { payload: DataStateType; type: string }) => void) => {
        authMeAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
                }
            })
    }
    return thunk
}

