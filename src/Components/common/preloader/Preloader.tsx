import React from 'react';
import loader from "../../Users/loader.svg";

const Preloader = () => {
    return (
        <div>
            <img src={loader} alt={'loader'}/>
        </div>
    );
};

export default Preloader;