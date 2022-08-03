import React from "react";
import Header from "./Header";
import {getAuthUserDataThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type MapStatePropsType = {
    isAuth: boolean
    login: null | string
}
export type MapDispatchPropsType = {
    getAuthUserDataThunkCreator: () => void
    logoutThunkCreator: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
    this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserDataThunkCreator , logoutThunkCreator})(HeaderContainer)
