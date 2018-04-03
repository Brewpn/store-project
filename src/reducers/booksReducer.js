import {
    BOOK_SEARCH,
    BOOK_SEARCH_SUCCESS,
    BOOK_SEARCH_REQUEST,
    BOOK_SEARCH_FAILURE,
    BOOK_OUTPUT_FAILURE,
    BOOK_OUTPUT_REQUEST,
    BOOK_OUTPUT_SUCCESS,
    BOOK_SELECTED
} from '../actions'

export function selectedBook(state = {}, action) {
    switch (action.type) {
        case BOOK_SELECTED:
            return Object.assign({},
                state,
                action.book);
        default:
            return state;
    }
}

export function books(state = {
    isFetching: false,
    errorMessage: '',
    searchBookTitle: '',
    data: []
}, action) {
    switch (action.type) {
        case BOOK_SEARCH:
            return Object.assign({}, state, {
                searchBookTitle: action.searchString
            });
        case BOOK_SEARCH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case BOOK_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.books,
                errorMessage: ''
            });
        case BOOK_SEARCH_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
}

export function allBooks(state = {
    isFetching: false,
    errorMessage: '',
    data: []
}, action) {
    switch (action.type) {
        case BOOK_OUTPUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case BOOK_OUTPUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.books,
                errorMessage: ''
            });
        case BOOK_OUTPUT_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
}