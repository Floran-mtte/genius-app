import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from './../views/Home'
import SignIn from "../views/SignIn";
import Album from "../views/Album";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={SignIn} />
                <PrivateRoute path={'/home'} component={Home} />
                <PrivateRoute path={'/albums/:id'} component={Album} />
                <Redirect to={'/'} />
            </Switch>
        </Router>
    )
}

export default Routes
