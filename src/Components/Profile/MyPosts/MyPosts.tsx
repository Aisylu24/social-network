import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import AddPostForm from "./AddPosrForm/AddPostForm";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: any) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

    let postElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPostHandler = (values: any) => {
        console.log(values,'hey')
        addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <AddPostForm onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts


