import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: any) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

    let postElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPostHandler = (values: any) => {
        addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <MyPostsFormRedux onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts

const MyPostsForm = (props: any) => {
    console.log(props, 'props')
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={'textarea'} name={'newPostText'} placeholder={'Add your new post'}  />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostsFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(MyPostsForm)
