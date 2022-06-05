import React from 'react'
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type MapStatePropsType = {
usersPage: InitialStateType
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number)=> void
    setUsers: (users: UserType[])=>void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStateType):MapStatePropsType=> {
    return {
        usersPage: state.usersPage
    }
}


let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
return {
    follow: (userId: number)=> {
        dispatch(followAC(userId))
    },
    unfollow: (userId: number)=> {
        dispatch(unfollowAC(userId))
    },
   setUsers: (users: UserType[])=> {
        dispatch(setUsersAC(users))
    }
}
}


export default  connect(mapStateToProps,mapDispatchToProps)(Users)