import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App= () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
