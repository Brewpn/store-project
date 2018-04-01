import React, { Component } from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import browserHistory from '../browserHistory'
import configureStore from '../configureStore'
import { sessionService } from 'redux-react-session';

import BookContainer from './BookContainer'
import MainTheme from './MainTheme'
import Dashboard from './Dashboard'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const PrimaryLayout = () => (
    <div>
        <Route component={MainTheme} />
        <Switch>

            <Route path="/Books" component={BookContainer} />
        </Switch>
    </div>
);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <PrimaryLayout/>
                </Router>
            </Provider>
        )
    }
}