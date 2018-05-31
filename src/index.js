import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './App.css';
import './style/main.scss';
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { history } from './utils/history'
import configureStore from './utils/configureStore'
import {runSaga} from './utils/saga'
import { syncHistoryWithStore } from 'react-router-redux'
import {MuiThemeProvider} from 'material-ui'

const store = configureStore();
runSaga();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <Router history={history}>
            <Routes/>
        </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

