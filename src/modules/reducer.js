import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionReducer } from 'redux-react-session';

import { reducer as auth} from './header/cms/index'
import { categories, selectedCategory, books, allBooks, selectedBook } from './assortment/reducer'
import { clientSelectedBook, booksByFilter, cart } from './client/reducer'

const rootReducer = combineReducers({
    selectedBook,
    selectedCategory,
    allBooks,
    books,
    categories,
    auth,
    booksByFilter,
    cart,
    clientSelectedBook,
    session: sessionReducer,
    routing: routerReducer
});

export default rootReducer;