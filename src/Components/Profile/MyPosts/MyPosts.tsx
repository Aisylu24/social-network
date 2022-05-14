import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let posts = [
        {id: 1,message: 'Hi there', likesCount: 10},
        {id: 2, message: 'My first post', likesCount: 25}
    ]

    let postElements = posts.map(p=> <Post message={p.message} likes={p.likesCount}/>)


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
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts
