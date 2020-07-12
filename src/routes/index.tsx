import React from 'react';
import Index from '../pages/Main'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Index />
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;