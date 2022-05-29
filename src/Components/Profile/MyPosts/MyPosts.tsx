import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-redicer";
import {ActionsType, PostType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsType)=> void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPost = () => {
            props.dispatch(addPostAC())
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        props.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts
