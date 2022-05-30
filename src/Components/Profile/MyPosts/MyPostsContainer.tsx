import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-redicer";
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";



type MyPostsPropsType = {
    store: StoreType
}


const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState()

    const addPost = () => {
            props.store.dispatch(addPostAC())
    }

    const onPostChange = (newText:string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return <MyPosts
        onChange={onPostChange}
        callBack={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />

}

export default MyPostsContainer
