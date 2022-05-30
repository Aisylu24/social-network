import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    callBack: () => void
    onChange: (newText: string) => void
}


const MyPosts: React.FC<MyPostsPropsType> = ({posts, callBack, onChange, newPostText}) => {

    let postElements = posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addPost = () => {
        callBack()
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = event.currentTarget.value
        onChange(newText)
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
