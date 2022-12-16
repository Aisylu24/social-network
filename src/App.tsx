import React, {useEffect} from 'react';
import './App.css';
import {initializeAppTC} from "./app-reducer";
import {useDispatch} from "react-redux";
import Preloader from "./Components/common/preloader/Preloader";
import Body from './Components/Body/Body';
import {useAppSelector} from "./hooks/useAppSelector";


const App = () => {
    let initialized = useAppSelector(state => state.app.initialized)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [])

    return (
        !initialized
            ? <Preloader/>
            : <Body/>
    );
}


export default App;
