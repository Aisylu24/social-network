import React from "react";
import classes from './Header.module.css'


const Header = ()=> {
    return (
        <header className={classes.header}>
            <img
                src="https://cryptologos.cc/logos/aave-aave-logo.png"
                alt="meow"/>
        </header>
    )
}

export default Header
