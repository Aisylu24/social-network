import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


const userWithoutPhoto = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

type UserPropsType = {
    user: UserType
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    isFollowing: number[]
}

const User: React.FC<UserPropsType> = ({user,...props  })=> {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img alt={'photo'} src={user.photos.small != null ? user.photos.small : userWithoutPhoto} className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>
                           {
                               user.followed ?
                                   <button disabled={props.isFollowing.includes(user.id)} onClick={() => {
                                       props.unfollowThunkCreator(user.id)

                                   }}>Unfollow</button>
                                   : <button disabled={props.isFollowing.includes(user.id)} onClick={() => {
                                       props.followThunkCreator(user.id)
                                           }
                                   }>Follow</button>
                           }
                        </div>
                    </span>
                            <span>
                        <div>{user.name}</div><div>{user.status}</div>
                    </span>
                            <span>
                    <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                </span>
                        </div>


    );
};

export default User;