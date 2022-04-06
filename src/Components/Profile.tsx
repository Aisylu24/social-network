import React from "react";
import classes from './Profile.module.css'


const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://sun9-84.userapi.com/impf/RpcHzTaac5bDQr0ACHUqBtU3ONR-eQWM_4jLlg/Pk0lR7iGNeo.jpg?size=2560x1707&quality=95&sign=4379bcada20c7bb17e07cd8ec5f0d294&type=album"
                    alt=""/>
            </div>
            <div>ava+description</div>
            <div>
                    My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
