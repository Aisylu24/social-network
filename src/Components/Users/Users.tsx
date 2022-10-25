import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Pagination} from "../common/Pagination/Pagination";
import User from "./User";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    onPageChangedHandler: (page: number) => void
    isFollowing: number[]
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             pageSize,
                                             currentPage,
                                             onPageChangedHandler,
                                             users,
                                             ...props
                                         }) => {
    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                        onPageChangedHandler={onPageChangedHandler}/>
            <div>
                {
                    users.map(user =>
                        <User key={user.id} user={user} followThunkCreator={props.followThunkCreator}
                              unfollowThunkCreator={props.unfollowThunkCreator}
                              isFollowing={props.isFollowing}/>
                    )
                }
            </div>
        </div>
    );
};

export default Users;