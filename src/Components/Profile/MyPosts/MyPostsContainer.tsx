import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-redicer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsType, RootStateType} from "../../../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        onChangeCallBack: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        onClickCallBack: () => {
            dispatch(addPostAC())

        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
