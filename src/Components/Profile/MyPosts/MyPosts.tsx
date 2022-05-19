import React, {useRef} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePropsType} from "../Profile";

type MyPostsPropsType = {
    posts: PostType[]
}


const MyPosts = (props: MyPostsPropsType ) => {

    let postElements = props.posts.map(p=> <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }

    }
    return (
        <div className={s.postsBlock}>
           <h4>My posts</h4>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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
