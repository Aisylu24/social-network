import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType)=> {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps= (dispatch: (action: ActionsType) => void) => {
    return {
        onChangeCallBack: (newMessage:string)=> {
            dispatch(updateNewMessageAC(newMessage))
        },
        onClickCallBack: ()=> {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)