import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {addMessageAC, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    setFollow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    switchFetching, switchFollowingProgress,
    setUnfollow,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setFollow>
    | ReturnType<typeof setUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof switchFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof switchFollowingProgress>
    | ReturnType<typeof setStatus>



// @ts-ignore
window.store = store