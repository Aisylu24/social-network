import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {MapDispatchPropsType, MapStatePropsType} from "./HeaderContainer";

type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

const Header = (props: HeaderPropsType)=> {
    return (
        <header className={classes.header}>
            <img
                src="https://cryptologos.cc/logos/aave-aave-logo.png"
                alt="meow"/>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div> {props.login}  <button onClick={props.logoutThunkCreator}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }

            </div>
        </header>
    )
}

export default Header
