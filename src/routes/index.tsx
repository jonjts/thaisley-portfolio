import React from 'react';
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Contact from '../pages/Contact'
import Cases from "../pages/Case";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about-me">
                    < AboutMe />
                </Route>
                <Route path="/contact">
                    < Contact />
                </Route>
                <Route path="/cases">
                    <Cases />
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;
