import React, { Component } from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import { history } from '../../utils/history'
import configureStore from '../../utils/configureStore'
import { sessionService } from 'redux-react-session';

import BookContainer from '../../modules/assortment/containers/AssortmentContainer'
import MainTheme from '../../modules/header/cms/containers/Navbar'
import Dashboard from './Dashboard'

import ClientMainTheme from './ClientMainTheme'

const store = configureStore();

const PrimaryLayout = () => (
    <div>

        <Route path="/admin" component={MainTheme} />
        <Route path="/admin/Books" component={BookContainer} />
    </div>
);

const ClientLayout = () => (
    <div>
        <Route exact={true} path="/" component={ClientMainTheme} />
    </div>
);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>

                        <PrimaryLayout/>
                        <ClientLayout/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}