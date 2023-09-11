import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {layout} from "./projectRouting";
import NotFound404View from "./main/layouts/mainLayout/apps/main/views/NotFound404View/NotFound404View";
import initialize from "./init";
import globalState from "./core/state/globalState";
import './themes.css'
import './projectCSS.css';
import './bs_plus.css'

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
