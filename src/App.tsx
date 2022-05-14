import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";


function App() {

    let state = {
        profilePage: {
            posts: [
                {id: 1,message: 'Hi there', likesCount: 10},
                {id: 2, message: 'My first post', likesCount: 25}
            ]
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Zarina'},
                {id: 2, name: 'Guzel'},
                {id: 3, name: 'Liza'}
            ],
            messages:[
                {id: 1,message: 'Hi'},
                {id: 2, message: 'What\'s up?'},
                {id: 3, message: 'Are you ok?'}
            ]
        }
    }


    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
           <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile state={state.profilePage}/>}/>
                    <Route path="/dialogs/*" element= {<Dialogs state={state.messagesPage} />} />

                </Routes>
            </div>

        </div>
        </BrowserRouter>

    );
}


export default App;
