import {AxiosCategories, AxiosBooks} from './api'

export const BOOK_OUTPUT_REQUEST = 'BOOK_OUTPUT_REQUEST';
export const BOOK_OUTPUT_SUCCESS = 'BOOK_OUTPUT_SUCCESS';
export const BOOK_OUTPUT_FAILURE = 'BOOK_OUTPUT_FAILURE';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOK_SEARCH = 'BOOK_SEARCH';
export const BOOK_EDIT = 'BOOK_EDIT';
export const BOOK_EDIT_REQUEST = 'BOOK_EDIT_REQUEST';

export const BOOK_SEARCH_REQUEST = 'BOOK_SEARCH_REQUEST';
export const BOOK_SEARCH_SUCCESS = 'BOOK_SEARCH_SUCCESS';
export const BOOK_SEARCH_FAILURE = 'BOOK_SEARCH_FAILURE';

export const CATEGORY_LIST_FETCH = 'CATEGORY_LIST_FETCH';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_EDIT = 'CATEGORY_EDIT';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

export const CATEGORY_SELECT = 'CATEGORY_SELECT';

//BOOKS OUTPUT

function requestAllBooks() {
    return {
        type: BOOK_OUTPUT_REQUEST,
        isFetching: true,
    }
}

function receiveAllBooks(books) {
    return {
        type: BOOK_OUTPUT_SUCCESS,
        isFetching: false,
        books
    }
}

function allBookError(errorMessage) {
    return {
        type: BOOK_OUTPUT_FAILURE,
        isFetching: false,
        errorMessage
    }
}

export function outputBookByCategory(category) {


    return (dispatch) => {

        dispatch(requestAllBooks());

        return AxiosBooks.get(category)
            .then(response => {

                if (response.data.length === 0) {
                    dispatch(allBookError('No books in that category'));
                    return Promise.reject(response)
                }

                return response.data;
            })
            .then(data => {
                dispatch(receiveAllBooks(data))
            })
            .catch(error => console.log(error));
    };
}

//BOOK SELECT

export function selectBook (book) {
    return {
        type: BOOK_SELECTED,
        book
    }
}

//BOOK EDIT

function editBookRequest() {
    return {
        type: BOOK_EDIT_REQUEST
    }
}

function editBook (book) {
    return {
        type: BOOK_EDIT,
        book
    }
}



export function axiosEditBook(book, image) {
    return async dispatch => {
        dispatch(editBookRequest());
        const logo = await AxiosBooks.editImage(image);
        book.logo = logo.name;

        return await AxiosBooks.edit(book)
            .then(response => {
                if (response.status === 500) {
                    dispatch(bookError('Something went wrong'));
                    return Promise.reject(response)
                }

                dispatch(editBook(book))
            })
            .catch(err => console.log(err))
    }
}

//BOOKS SEARCH

function searchBook(searchString) {
    return {
        type: BOOK_SEARCH,
        searchString
    }
}

function requestBooks() {
    return {
        type: BOOK_SEARCH_REQUEST,
        isFetching: true,
    }
}

function receiveBooks(books) {
    return {
        type: BOOK_SEARCH_SUCCESS,
        isFetching: false,
        books
    }
}

function bookError(errorMessage) {
    return {
        type: BOOK_SEARCH_FAILURE,
        isFetching: false,
        errorMessage
    }
}

export function searchBookByTitle(book) {


    return (dispatch) => {

        dispatch(requestBooks(book));

        return AxiosBooks.search(book)
            .then(response => {
                if (response.data.length === 0) {
                    dispatch(bookError('No books with that title'));
                    return Promise.reject(response)
                }

                return response.data;
            })
            .then(data => {
                dispatch(receiveBooks(data))
            });
    };
}

//CATEGORIES

function categoryFailure(errorMessage) {
    return {
        type: CATEGORY_FAILURE,
        errorMessage
    }
}

export function selectCategory(category) {
    return {
        type: CATEGORY_SELECT,
        category
    }
}

function categoryAdd(category) {
    return {
        type: CATEGORY_ADD,
        category
    }
}

function categoryDelete(category) {
    return {
        type: CATEGORY_DELETE,
        category
    }
}

function categoryListOut(categories, page) {
    return {
        type: CATEGORY_LIST_FETCH,
        categories,
        page
    }
}

function categoryEdit(newCategory) {
    return {
        type: CATEGORY_EDIT,
        newCategory
    }
}

export function axiosEditCategory(creds) {
    return (dispatch) => {
        return AxiosCategories.edit(creds)
            .then(response => response.data)
            .then(res => {
                if (res.message === "Done") {
                    return dispatch(categoryEdit(creds));
                }

                return res.message
            })
            .catch(error => {
                dispatch(categoryFailure('Something went wrong'))
            })
    }
}

export function createCategory(creds) {
    return (dispatch) => {
        return AxiosCategories.add(creds)
            .then(response => response.data)
            .then(category => {
                dispatch(categoryAdd(category))
            })
            .catch(error => {
                dispatch(categoryFailure('Please write title and description'))
            })
    }
}

export function getCategories(page = 1) {
    return (dispatch) => {

        return AxiosCategories.get(page)
            .then(response => response.data)
            .then(categories => {
                dispatch(categoryListOut(categories, page));
            })
            .catch(error => {
                dispatch(categoryFailure('Oups, something went wrong'))
            })

    }
}