import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import {LoginContainer} from "./Components/Login/Login";
import {initializeAppTC} from "./app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Components/common/preloader/Preloader";
import {AppStateType} from "./redux/store/redux-store";

const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./Components/Profile/ProfileContainer"));

const App = () => {
    let initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [])

    return (
        !initialized
            ? <Preloader/>
            : <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
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
}


export default App;
