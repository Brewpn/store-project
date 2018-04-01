import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session';

import auth from './loginReducer'
import { categories, selectedCategory } from './categoryReducer'
import { books, allBooks } from './booksReducer'

const rootReducer = combineReducers({
    selectedCategory,
    allBooks,
    books,
    categories,
    auth,
    session: sessionReducer,
    routing: routerReducer
});

export default rootReducer;