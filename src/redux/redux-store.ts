import {combineReducers, legacy_createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    switchFetchingAC,
    unfollowAC,
    usersReducer
} from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = legacy_createStore(rootReducer)

export type ActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof switchFetchingAC>

