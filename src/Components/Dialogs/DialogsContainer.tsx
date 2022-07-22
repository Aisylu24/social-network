import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {withAuthNavigate} from "../hoc/withAuthNavigate";

let mapStateToProps = (state: AppStateType)=> {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onChangeCallBack: (newMessage:string)=> {
            dispatch(updateNewMessageAC(newMessage))
        },
        onClickCallBack: ()=> {
            dispatch(addMessageAC())
        }
    }
}

const AuthNavigateComponent = withAuthNavigate(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent)