import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Add from '../components/Home/Add';
import Category from './../components/Home/Category';
import Home from './../components/Home/Home';

export default function Routers() {
    return (
        <Switch>
            <Route  component={Add} path="/add"/>
            <Route exact={true} component={Home} path="/" />
            <Route  component={Category} path="/note/:id" />
        </Switch>
    )
}
