import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import BookContainer from '../modules/client/containers/MainContainer'
import MainTheme from '../modules/header/cms/containers/Navbar'


const PrimaryLayout = () => (
    <div>
        <Route path="/admin" component={MainTheme} />
        <Route path="/admin/Books" component={BookContainer} />
    </div>
);

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <PrimaryLayout/>
            </Switch>
        )
    }
}