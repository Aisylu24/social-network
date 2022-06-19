import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
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
