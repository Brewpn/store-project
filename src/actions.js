import axios from 'axios'
import {sessionService} from 'redux-react-session';
import {Authorize} from './api/auth'
import {AxiosCategories, AxiosBooks} from './api/booksAndCategories'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export const BOOK_OUTPUT_REQUEST = 'BOOK_OUTPUT_REQUEST';
export const BOOK_OUTPUT_SUCCESS = 'BOOK_OUTPUT_SUCCESS';
export const BOOK_OUTPUT_FAILURE = 'BOOK_OUTPUT_FAILURE';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOK_SEARCH = 'BOOK_SEARCH';
export const BOOK_EDIT = 'BOOK_EDIT';
export const BOOK_EDIT_IMAGE = 'BOOK_EDIT_IMAGE';

export const BOOK_SEARCH_REQUEST = 'BOOK_SEARCH_REQUEST';
export const BOOK_SEARCH_SUCCESS = 'BOOK_SEARCH_SUCCESS';
export const BOOK_SEARCH_FAILURE = 'BOOK_SEARCH_FAILURE';

export const CATEGORY_LIST_FETCH = 'CATEGORY_LIST_FETCH';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_EDIT = 'CATEGORY_EDIT';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

export const CATEGORY_SELECT = 'CATEGORY_SELECT';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const PIE_CHART_REQUEST = 'PIE_CHART_REQUEST';
export const PIE_CHART_SUCCESS = 'PIE_CHART_SUCCESS';
export const PIE_CHART_FAILURE = 'PIE_CHART_FAILURE';

export const SELECT_DATA_FOR_CHART = "SELECT_DATA_FOR_CHART";

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
            });
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

function editBook () {
    return {
        type: BOOK_EDIT,
    }
}



export function axiosEditBook(book, image) {
    return async dispatch => {

        const logo = await AxiosBooks.editImage();

        return
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

//LOGIN ACTIONS

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        user
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export function loginUser(creds) {


    return (dispatch) => {

        dispatch(requestLogin());

        return Authorize.login(creds)
            .then(response => {
                if (response.status === 401) {
                    dispatch(loginError('Wrong email ar password'));
                    return Promise.reject(response)
                }

                return response.data;
            })
            .then(data => {
                dispatch(receiveLogin(data))
            });
    };
}

export function logoutUser(history) {
    return (dispatch) => {
        return Authorize.logout().then(() => {
            dispatch(requestLogout());
            dispatch(receiveLogout());
            sessionService.deleteSession();
            sessionService.deleteUser();
            history.replace('/login');
        }).catch(err => {
            throw (err);
        });
    };
}

// export function loginUser(creds) {
//
//     let config = {
//         method: 'POST',
//         headers: { 'Content-Type':'application/x-www-form-urlencoded' },
//         body: `email=${creds.username}&password=${creds.password}`
//     };
//
//     return dispatch => {
//
//         dispatch(requestLogin());
//
//         return fetch(`${BASE_URL}/cms/auth/login`, config)
//             .then(response => {
//                 if (!response.ok) {
//                     dispatch(loginError('Wrong email ar password'));
//                     return Promise.reject(response)
//                 }
//                 return response.json()
//             }).then((user) =>  {
//                 dispatch(receiveLogin(user))
//             }).catch(err => console.log("Error: ", err))
//     }
// }
//
// export function logoutUser() {
//     return dispatch => {
//         dispatch(requestLogout());
//         dispatch(receiveLogout())
//     }
// }

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}


//PIE CHART

function requestPieChartData(data) {
    return {
        type: PIE_CHART_REQUEST,
        isFetching: true,
        data
    }
}

function receivePieChartData(data) {
    return {
        type: PIE_CHART_SUCCESS,
        isFetching: false,
        data
    }
}

function errorPieChartData(message) {
    return {
        type: PIE_CHART_FAILURE,
        isFetching: false,
        message
    }
}

function selectDataForChart(selectedType) {
    return {
        type: SELECT_DATA_FOR_CHART,
        selectedType
    }
}


