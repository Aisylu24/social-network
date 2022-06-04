import React from 'react'
import { UserType} from "../../redux/store";
import s from './users.module.css'


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers:(users: UserType[]) => void
}


export let Users=(props: UsersPropsType)=> {

    if(props.users.length === 0) {
        props.setUsers([
            {id: 1, name: 'Ai',photoUrl: URL, followed: false, status: 'Have a nice day', location: {city: 'Kazan', country: 'Russia'}},
            {id: 2, name: 'Di',photoUrl: URL, followed: true, status: 'Hi there', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, name: 'Liza',photoUrl: URL, followed: true, status: 'Hallo', location: {city: 'Mexico', country: 'Mexico'}},

        ])
    }


    return <div>
        {
            props.users.map (u=>
                <div key={u.id}>
                    <span>
                        <div>
                            <img alt={'photo'} src={u.photoUrl} className={s.photo}/>
                        </div>
                        <div>
                           {
                               u.followed ?
                               <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                               : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                           }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                    <div>{u.location.country}</div><div>{u.location.city}</div>
                </span>
                </div>
            )
        }
    </div>
}