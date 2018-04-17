import {
    BOOK_BY_FILTER_FAILURE,
    BOOK_BY_FILTER_REQUEST,
    BOOK_BY_FILTER_SELECTED,
    BOOK_BY_FILTER_SUCCESS
} from './actions'

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
    data: []
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
        default:
            return state
    }
}