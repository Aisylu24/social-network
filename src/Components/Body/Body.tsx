import React from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {ProfileContainer} from "../Profile/ProfileContainer";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import {LoginContainer} from "../Login/Login";
import s from "./Body.module.css"

const Body = () => {
    return (
        <div className={s.bodyWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.bodyWrapperContent}>
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default Body;