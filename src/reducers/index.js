import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session';
import auth from './loginReducer'

const rootReducer = combineReducers({
    auth,
    session: sessionReducer,
    routing: routerReducer
});

export default rootReducer;