import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import Profile from "./Components/Profile/Profile";
import {addPost, ProfilePageType, RootStateType, updateNewPostText} from "./redux/state";
import {state} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost,  updateNewPostText}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage={state.profilePage}
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage}/>}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
