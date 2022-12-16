import React, {lazy, Suspense} from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import {LoginContainer} from "../Login/Login";
import s from "./Body.module.css"
import Preloader from "../common/preloader/Preloader";

const DialogsContainer = lazy(() => import("../Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("../Profile/ProfileContainer"));

const Body = () => {
    return (
        <div className={s.bodyWrapper}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.bodyWrapperContent}>
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/social-network" element={<LoginContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/profile/" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </Suspense>
            </div>

        </div>
    );
};

export default Body;
