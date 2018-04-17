import {
    BOOK_SEARCH,
    BOOK_SEARCH_SUCCESS,
    BOOK_SEARCH_REQUEST,
    BOOK_SEARCH_FAILURE,
    BOOK_OUTPUT_FAILURE,
    BOOK_OUTPUT_REQUEST,
    BOOK_OUTPUT_SUCCESS,
    BOOK_SELECTED,
    BOOK_EDIT,
    CATEGORY_EDIT,
    CATEGORY_LIST_FETCH,
    CATEGORY_DELETE,
    CATEGORY_ADD,
    CATEGORY_SELECT,
    CATEGORY_FAILURE
} from './actions'
import _ from 'lodash'

//=====================
//BOOK REDUCER      |||
//=====================

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
        case BOOK_EDIT:
            return Object.assign({}, state,
                _.update(state, `data[${_.findIndex(state.data, {'_id': action.book._id})}]`, () => action.book)
            );
        case BOOK_OUTPUT_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
}

//=======================
//CATEGORIES REDUCER  |||
//=======================

export function categories(state = {
    page: 1,
    searchCategoryTitle: '',
    data: []
}, action) {
    switch (action.type) {
        case CATEGORY_ADD:
            return Object.assign({},
                state,
                state.data.push(action.category)
            );
        case CATEGORY_LIST_FETCH:
            return Object.assign({}, state, {
                data: action.categories,
                page: action.page
            });
        case CATEGORY_DELETE:
            return Object.assign({},
                state,
                _.remove(state.data, () => action.category)
            );
        case CATEGORY_EDIT:
            return Object.assign({},
                state,
                _.update(state, `data[${_.findIndex(state.data, {'_id': action.newCategory._id})}]`, () => action.newCategory),
            );
        case CATEGORY_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
}

export function selectedCategory(state = {}, action) {
    switch (action.type) {
        case CATEGORY_SELECT:
            return action.category;
        default:
            return state;
    }
}