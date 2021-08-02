import React from 'react'
import { Switch, Route } from 'react-router-dom';
import App from './../components/App/App';
import Login from './../components/Login/Login';

export default function RouterPage() {
    return (
        <Switch>
            <Route component={App} exact={true} path="/" />
            <Route component={Login} path="/" />
        </Switch>
    )
}
