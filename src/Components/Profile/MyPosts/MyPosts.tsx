import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPost = () => {
            props.addPost()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
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
