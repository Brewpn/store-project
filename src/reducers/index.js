import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session';

import auth from './loginReducer'
import { categories, selectedCategory } from './categoryReducer'
import { books, allBooks, selectedBook } from './booksReducer'

const rootReducer = combineReducers({
    selectedBook,
    selectedCategory,
    allBooks,
    books,
    categories,
    auth,
    session: sessionReducer,
    routing: routerReducer
});

export default rootReducer;