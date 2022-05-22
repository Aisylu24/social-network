import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type ProfilePropsType = {
    state: {
        posts: PostType[]
        newPostText: string
    },
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile
