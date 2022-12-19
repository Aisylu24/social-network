import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    owner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo  savePhoto={props.savePhoto} owner={props.owner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
