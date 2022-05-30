import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import {StoreType} from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({store}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile
                        store={store}
                    />}/>
                    <Route path="/dialogs/*" element={<DialogsContainer
                        store={store}
                    />}/>

                </Routes>
            </div>

        </div>
    );
}


export default App;
