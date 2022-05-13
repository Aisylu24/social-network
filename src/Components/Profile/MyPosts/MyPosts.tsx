import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
           <h4>My posts</h4>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message='Hi' likes={1}/>
                <Post message='My first post' likes={50}/>

            </div>
        </div>

    )
}

export default MyPosts
