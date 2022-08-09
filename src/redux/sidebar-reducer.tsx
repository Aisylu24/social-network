import {ActionsType} from "./store/redux-store";

let initialState:SideBarType = {}
export type SideBarType = {}

export const sidebarReducer = (state: SideBarType = initialState, action: ActionsType):SideBarType => {
return state
}