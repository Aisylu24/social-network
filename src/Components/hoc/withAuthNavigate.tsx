import {useNavigate} from "react-router-dom";
import React, {ComponentType, useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

//type ConnectedNavigateComponent =

export function withAuthNavigate<T>(Component: ComponentType<T>): ComponentType<T> {
    const NavigateComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        let navigate = useNavigate()

        useEffect(()=>{
            if(!isAuth){
                return navigate("../login")
            }
        }, [isAuth])

        return <Component {...restProps as T}/>
    }
    let ConnectedNavigateComponent = connect(mapStateToProps)(NavigateComponent)
   return ConnectedNavigateComponent
}