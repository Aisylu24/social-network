import {ActionsType} from "./redux-store";
import {authMeAPI} from "../api/api";

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
            console.log(action.data)
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataStateType) => ({type: SET_USER_DATA, data} as const)

export const authMeThunkCreator = () => {
    const thunk = (dispatch: (action:ActionsType)=> void) => {
        authMeAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data))
                }
            })
    }
    return thunk
}


