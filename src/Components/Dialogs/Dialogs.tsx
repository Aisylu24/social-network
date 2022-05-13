import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active} >
                    <NavLink to={'/dialogs/1'}>Zarina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Guzel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Liza</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What's up?</div>
                <div className={s.message}>Are you ok?</div>
            </div>
        </div>
    );
};

export default Dialogs;