import React from "react";
import s from "./users.module.css";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";


const URL = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

type UsersResponseType = {
    error: null | string
    items: Array<UserType>
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios.get<UsersResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response)
                this.props.setUsers(response.data.items)
            })
        }}

        render()
        {
            return <div>
                {
                    this.props.usersPage.users.map(u =>
                            <div key={u.id}>
                    <span>
                        <div>
                            <img alt={'photo'} src={u.photos.small != null ? u.photos.small : URL} className={s.photo}/>
                        </div>
                        <div>
                           {
                               u.followed ?
                                   <button onClick={() => {
                                       this.props.unfollow(u.id)
                                   }}>Unfollow</button>
                                   : <button onClick={() => {
                                       this.props.follow(u.id)
                                   }}>Follow</button>
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
        }
    }

