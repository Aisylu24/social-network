import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name:string
    id: number
}

export const DialogItem = (props:DialogItemPropsType) => {
    const path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active} >
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
