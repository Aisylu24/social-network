import React, {ComponentType} from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";

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

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate // const AuthNavigateComponent = withAuthNavigate(Dialogs)
)(Dialogs)