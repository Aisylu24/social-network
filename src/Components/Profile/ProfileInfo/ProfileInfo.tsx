import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import Preloader from "../../common/preloader/Preloader";

const userWithoutPhoto = 'https://i.pinimg.com/474x/f0/4a/f7/f04af7e5380bc7b9defd08bbf8756306.jpg'

type ProfileInfoPropsType = {
    owner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const chooseAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    console.log(props.profile.photos)

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile?.photos.large : userWithoutPhoto} alt={'user photo'}/>
                {props.owner && <input type={'file'} onChange={chooseAvatarHandler}/>}
                <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                {/*<ProfileStatusWithClass status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
            </div>
        </div>
    )
}

