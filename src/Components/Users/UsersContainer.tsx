import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC, switchFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


type UsersResponseType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}


export class UsersAPI extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.switchFetching(true)
        if (this.props.usersPage.users.length === 0) {
            axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.switchFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (page: number) => {
        this.props.switchFetching(true)
        this.props.setCurrentPage(page)
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.switchFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users users={this.props.usersPage.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   callBack={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
    }
}

export type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    switchFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        switchFetching: (isFetching: boolean) => {
            dispatch(switchFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)