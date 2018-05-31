import {
    BOOK_BY_FILTER_FAILURE,
    BOOK_BY_FILTER_REQUEST,
    BOOK_BY_FILTER_SELECTED,
    BOOK_BY_FILTER_SUCCESS,
    BOOK_IN_CART,
    BOOK_SELECTED,
    BOOK_REMOVE_FROM_CART,
} from './actions'
import _ from 'lodash'

//=====================
//BOOK REDUCER      |||
//=====================

export function clientSelectedBook(state = {}, action) {
    switch (action.type) {
        case BOOK_BY_FILTER_SELECTED:
            return Object.assign({},
                state,
                action.book);
        default:
            return state;
    }
}

export function booksByFilter(state = {
    isFetching: false,
    errorMessage: '',
    data: [],
    selectedBook: {}
}, action) {
    switch (action.type) {
        case BOOK_BY_FILTER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case BOOK_BY_FILTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.books,
                errorMessage: ''
            });
        case BOOK_BY_FILTER_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        case BOOK_SELECTED:
            return Object.assign({}, state, {
                selectedBook: action.book
            });
        default:
            return state
    }
}

//=====================
//CART REDUCER      |||
//=====================

export function cart(state = {
    data: []
}, action) {
    switch (action.type) {
        case BOOK_IN_CART:
            return Object.assign({}, state, state.data.push(action.book));
        case BOOK_REMOVE_FROM_CART:
            return Object.assign({}, state, {
                data: []
            });
        default:
            return state;
    }
}