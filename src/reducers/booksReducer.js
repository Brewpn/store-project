import {
    BOOK_SEARCH,
    BOOK_SEARCH_SUCCESS,
    BOOK_SEARCH_REQUEST,
    BOOK_SEARCH_FAILURE
} from '../actions'

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