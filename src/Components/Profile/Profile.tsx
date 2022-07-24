import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import Preloader from "../common/preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}
const Profile = (props: ProfilePropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
