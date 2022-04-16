import React from "react";
import s from './Post.module.css'

type PropsType = {
    message: string
    likes:number
}

const Post = (props:PropsType) => {
    return (

                <div className={s.item}>
                    <img src="https://sun9-16.userapi.com/impf/31_TO0X3FALXzSAqXDq7ZAzCM5iFPhJUSN4GqQ/ukTUFesuFic.jpg?size=2560x1707&quality=95&sign=218f7cfcbb9c814d3bbd51026e214107&type=album" alt=""/>
                    {props.message}
                    <div>
                    <span>like</span> {props.likes}
                    </div>
                </div>

    )
}

export default Post
