import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session';

import auth from './loginReducer'
import categories from './categoryReducer'
import books from './booksReducer'

const rootReducer = combineReducers({
    books,
    categories,
    auth,
    session: sessionReducer,
    routing: routerReducer
});

export default rootReducer;