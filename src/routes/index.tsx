import React from 'react';
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/about-me">
                    < AboutMe />
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;