import {
    BOOK_SEARCH,
    BOOK_SEARCH_SUCCESS,
    BOOK_SEARCH_REQUEST,
    BOOK_SEARCH_FAILURE
} from '../actions'
import _ from 'lodash'

export default function categories(state = {
    isFetching: false,
    errorMessage: '',
    searchCategoryTitle: '',
    data: []
}, action) {
    switch (action.type) {
        case BOOK_SEARCH:
            return Object.assign({}, state, {
                searchCategoryTitle: action.searchString
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