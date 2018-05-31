import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import CmsContainer from '../modules/assortment/containers/MainContainer'
import ClientContainer from '../modules/client/containers/MainContainer'


export default class Routes extends Component {
    render() {
        return (
            <Switch>
                {/*<Route exact path="/" component={ClientContainer} />*/}
                <Route path="/admin" component={CmsContainer} />
            </Switch>
        )
    }
}