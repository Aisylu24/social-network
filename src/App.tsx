import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import {LoginContainer} from "./Components/Login/Login";
import {initializeAppTC} from "./app-reducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Components/common/preloader/Preloader";
import {AppStateType} from "./redux/store/redux-store";


const App = () => {
    console.log('App')
    let initialized = useSelector<AppStateType, boolean>(state => state.app.initialized)
    console.log(initialized)
    let dispatch = useDispatch()

    useEffect(() => {
        debugger
        console.log('useEfff')
        dispatch(initializeAppTC());
    }, [])

    // if (!initialized) {
    //     return <Preloader/>
    // }

    return (
        !initialized
            ? <Preloader/>
            : <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
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
}


export default App;
