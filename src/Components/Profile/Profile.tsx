import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    profileInfo?: any
    posts: PostType[]
}
export type PostType ={
    id: number
    message: string
    likesCount: number
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile
