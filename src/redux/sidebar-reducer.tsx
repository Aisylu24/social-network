import {ActionsType} from "./redux-store";

let initialState:SideBarType = {}
export type SideBarType = {}

export const sidebarReducer = (state: SideBarType = initialState, action: ActionsType):SideBarType => {
return state
}