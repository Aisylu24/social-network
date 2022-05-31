import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

const App= () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
