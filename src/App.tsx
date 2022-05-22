import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile, {PostType} from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom";


export type PropsType = {
    state: {
        profilePage: {
            posts: PostType[],
            newPostText: string
        },
        messagesPage: {
            dialogs: DialogsType[],
            messages: messagesType[]
        }
    },
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    message: string
}


const App: React.FC<PropsType> = ({state, addPost, updateNewPostText}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile
                        state={state.profilePage}
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs state={state.messagesPage}/>}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
