import React from 'react'
import {connect} from "react-redux";
import {followThunkCreator, getUsersThunkCreator, switchFollowingProgress,
    unfollowThunkCreator, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store/redux-store";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {
    getCurrentPage,
    getIsFetching, getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selector/users-selectors";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        let {currentPage,pageSize } = this.props
        this.props.getUsersThunkCreator(currentPage, pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        switchFollowingProgress,
        getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
    }),
    withAuthNavigate
)(UsersContainer)