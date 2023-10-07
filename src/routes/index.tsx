import React from 'react';
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Contact from '../pages/Contact'
import Cases from "../pages/Case";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


const routes: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* <Navigate to='/home' /> */}
                <Route  path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cases" element={<Cases/>}/>
            </Routes>
        </Router>
    )
}

export default routes;
