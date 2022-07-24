import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const userWithoutPhoto = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://sun9-70.userapi.com/impf/WcawhtE_gFfDESKh-l8rtClDjgoSfOYnjrFAIA/cDMzHGeSmoo.jpg?size=2560x1260&quality=95&sign=4fb12f322f8738ec25c52609749a694f&type=album"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile?.photos.large || userWithoutPhoto} alt={'user photo'}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                {/*<ProfileStatusWithClass status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
            </div>
        </div>
    )
}

