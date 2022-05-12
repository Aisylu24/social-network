import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active} >
                    Zarina
                </div>
                <div className={s.dialog}>
                    Guzel
                </div>
                <div className={s.dialog}>
                    Liza
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