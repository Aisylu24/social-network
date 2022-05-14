import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id: 1,message: 'Hi there', likesCount: 10},
        {id: 2, message: 'My first post', likesCount: 25}
    ]

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
                <Post message={postData[0].message} likes={postData[0].likesCount}/>
                <Post message={postData[1].message} likes={postData[0].likesCount}/>

            </div>
        </div>

    )
}

export default MyPosts
