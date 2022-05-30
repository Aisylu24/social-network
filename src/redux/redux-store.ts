import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-redicer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = legacy_createStore(reducers)