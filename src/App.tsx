import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Main} from "./pages/Main/Main";
import {Login} from "./pages/Login/Login";
// import {Test} from "./pages/Test/Test";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/test" element={<Test />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
