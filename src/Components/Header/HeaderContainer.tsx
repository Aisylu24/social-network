import React from "react";
import Header from "./Header";
import {DataStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authMeAPI} from "../../api/api";


export type MapStatePropsType = {
    isAuth: boolean
    userLogin: null | string
}
export type MapDispatchPropsType = {
    setAuthUserData: (data: DataStateType) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authMeAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.userLogin
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData})(HeaderContainer)
