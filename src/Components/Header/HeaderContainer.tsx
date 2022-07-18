import React from "react";
import Header from "./Header";
import {authMeThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export type MapStatePropsType = {
    isAuth: boolean
    userLogin: null | string
}
export type MapDispatchPropsType = {
    authMeThunkCreator: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
    this.props.authMeThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.userLogin
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {authMeThunkCreator})(HeaderContainer)
