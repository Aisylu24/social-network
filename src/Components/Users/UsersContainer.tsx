import React from 'react'
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator, switchFollowingProgress,
    unfollowThunkCreator, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChangedHandler={this.onPageChanged}
                   followThunkCreator={this.props.followThunkCreator}
                   unfollowThunkCreator={this.props. unfollowThunkCreator}
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
    switchFollowingProgress: (isFollowingProgress: boolean, userId:number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    //getUsersThunkCreator: (currentPage: number, pageSize: number)  => (dispatch: (action: ActionsType) => void) => void

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
        switchFollowingProgress,
        getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
    }),
    withAuthNavigate
)(UsersContainer)