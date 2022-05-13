import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://sun9-70.userapi.com/impf/WcawhtE_gFfDESKh-l8rtClDjgoSfOYnjrFAIA/cDMzHGeSmoo.jpg?size=2560x1260&quality=95&sign=4fb12f322f8738ec25c52609749a694f&type=album"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock} >
                ava+description</div>
        </div>
    )
}

