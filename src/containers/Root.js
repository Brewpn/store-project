import React, { Component } from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import browserHistory from '../browserHistory'
import configureStore from '../configureStore'

import MainTheme from './MainTheme'
import Dashboard from './Dashboard'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route component={MainTheme}>
                        <Route path="/" component={Dashboard} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}