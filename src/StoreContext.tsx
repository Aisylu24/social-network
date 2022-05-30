import React from "react";
import {StoreType} from "./redux/store";


export const StoreContext = React.createContext({} as StoreType)


export const Provider = (props: {
    store: StoreType;
    children: boolean
        | React.ReactChild | React.ReactFragment | React.ReactPortal
        | null | undefined;
}) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}