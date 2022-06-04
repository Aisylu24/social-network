import React from 'react'
import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {ActionsType, RootStateType, UserType} from "../../redux/store";

let mapStateToProps = (state:RootStateType)=> {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch: (action: ActionsType) => void)=> {
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