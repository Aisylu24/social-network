import React from 'react';
import {ReactComponent as Loader} from "./loader.svg";
import s from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div>
          <Loader className={s.loader}/>
        </div>
    );
};

export default Preloader;