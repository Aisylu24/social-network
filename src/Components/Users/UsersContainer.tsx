import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalCount,
    setUsers, switchFetching, switchFollowingProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {userAPI} from "../../api/api";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.switchFetching(true)
        if (this.props.users.length === 0) {
            userAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.switchFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalCount(data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.switchFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.switchFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChangedHandler={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   switchFollowingProgress={this.props.switchFollowingProgress}
                   isFollowing={this.props.isFollowing}
            />
        </>
    }
}

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    switchFetching: (isFetching: boolean) => void
    switchFollowingProgress: (isFollowingProgress: boolean, userId:number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        switchFetching,
        switchFollowingProgress
    }))(UsersContainer)
