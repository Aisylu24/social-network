import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-redicer";
import {StoreContext} from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (newText: string) => {
                    store.dispatch(updateNewPostTextAC(newText))
                }

                return <MyPosts
                    onChange={onPostChange}
                    callBack={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer
