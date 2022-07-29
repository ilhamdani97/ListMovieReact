import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import AppRoutes from "../../config/routes";

import './styles.scss';

function App() {
    return (
        <Router>
            <Switch>
                
                {AppRoutes.map((route) => (
                    <Route key={route.id} {...route}/>
                ))}
                <Redirect from='*' to='/error'/>
            </Switch>
        </Router>
    )
};

export default App;