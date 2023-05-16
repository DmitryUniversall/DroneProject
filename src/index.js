import React from 'react';
import ReactDOM from 'react-dom/client';
import './projectCSS.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {layout} from "./projectRouting";
import NotFound404View from "./core/generics/views/generics/NotFound404View/NotFound404View";
import initialize from "./init";
import globalState from "./core/state/globalState";

initialize().then(() => {
    globalState.dispatch({
        isInitialized: true
    })
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={`${layout.path}*`} key={layout.name} element={<layout.component />} />
            <Route path='*' element={<NotFound404View />} />
        </Routes>
    </BrowserRouter>
)
