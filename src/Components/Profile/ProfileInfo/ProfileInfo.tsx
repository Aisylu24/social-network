import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://sun9-70.userapi.com/impf/WcawhtE_gFfDESKh-l8rtClDjgoSfOYnjrFAIA/cDMzHGeSmoo.jpg?size=2560x1260&quality=95&sign=4fb12f322f8738ec25c52609749a694f&type=album"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock} >
                <img src={props.profile?.photos.large || undefined} alt={'user photo'}/>
                ava+description</div>
        </div>
    )
}

