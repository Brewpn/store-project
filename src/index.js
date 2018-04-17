import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './App.css';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import browserHistory from './utils/history'
import configureStore from './utils/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Routes/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

