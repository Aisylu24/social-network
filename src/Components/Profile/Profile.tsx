import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div
            // className={classes.content}
        >
             <div>
                 <img className={classes.img}
                    src="https://sun9-70.userapi.com/impf/WcawhtE_gFfDESKh-l8rtClDjgoSfOYnjrFAIA/cDMzHGeSmoo.jpg?size=2560x1260&quality=95&sign=4fb12f322f8738ec25c52609749a694f&type=album"
                     alt=""/>
             </div>
            <div>ava+description</div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile
