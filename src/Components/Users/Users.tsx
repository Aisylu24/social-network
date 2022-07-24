import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

const userWithoutPhoto = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

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

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        //  if (pages.length < 10)
        pages.push(i)
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);


    return (
        <div>
            <div className={s.pages}>
                {
                    slicedPages.map(page => {
                        return <span className={props.currentPage === page ? s.selected : ""}
                                     onClick={(e) => {
                                         props.onPageChangedHandler(page)
                                     }}>{page}</span>
                    })
                }
            </div>

            {

                props.users.map(u =>
                        <div key={u.id}>
                    <span>
                        
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img alt={'photo'} src={u.photos.small != null ? u.photos.small : userWithoutPhoto} className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>
                           {
                               u.followed ?
                                   <button disabled={props.isFollowing.includes(u.id)} onClick={() => {
                                       props.unfollowThunkCreator(u.id)

                                   }}>Unfollow</button>
                                   : <button disabled={props.isFollowing.includes(u.id)} onClick={() => {
                                       props.followThunkCreator(u.id)
                                           }
                                   }>Follow</button>
                           }
                        </div>
                    </span>
                            <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                            <span>
                    <div>{'u.location.country'}</div><div>{'u.location.city'}</div>
                </span>
                        </div>
                )
            }
        </div>
    );
};

export default Users;