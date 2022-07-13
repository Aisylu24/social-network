import React from "react";
import Header from "./Header";
import axios from "axios";
import {DataStateType, setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


export type MapStatePropsType = {
    isAuth: boolean
    userLogin: null| string
}
export type MapDispatchPropsType = {
    setAuthUserData: (data: DataStateType) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
axios.get<any>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials:true})
    .then(response => {
        if(response.data.resultCode === 0)
        this.props.setAuthUserData(response.data.data)
    })
    }

    render() {
    return <Header {...this.props}/>
    }
}


const mapStateToProps = (state:AppStateType)=> ({
    isAuth: state.auth.isAuth,
    userLogin: state.auth.userLogin
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)
