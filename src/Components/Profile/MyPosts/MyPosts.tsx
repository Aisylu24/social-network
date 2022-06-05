import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    onClickCallBack: () => void
    onChangeCallBack: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, onClickCallBack, onChangeCallBack, newPostText}) => {

    let postElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPost = () => {
        onClickCallBack()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        onChangeCallBack(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h4>My posts</h4>
            <div>
                <div>
                    <textarea
                        value={newPostText}
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
