import React from "react";
import Header from "./Header";
import {logoutThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
export type MapDispatchPropsType = {
    logoutThunkCreator: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logoutThunkCreator})(HeaderContainer)
