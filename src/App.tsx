import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import {ActionsType, RootStateType} from "./redux/state";



type AppPropsType = {
    state: RootStateType
    dispatch: (action:ActionsType)=> void
}

const App: React.FC<AppPropsType> = ({state, dispatch}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile
                        profilePage={state.profilePage}
                        dispatch={dispatch}
                    />}/>
                    <Route path="/dialogs/*" element={<Dialogs
                        dispatch={dispatch}
                        state={state.dialogsPage}
                    />}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
