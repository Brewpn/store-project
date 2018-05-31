import {AxiosBooks} from './api'

export const BOOK_BY_FILTER_SELECTED = 'BOOK_BY_FILTER_SELECTED';

export const BOOK_BY_FILTER_REQUEST = 'BOOK_BY_FILTER_REQUEST';
export const BOOK_BY_FILTER_SUCCESS = 'BOOK_BY_FILTER_SUCCESS';
export const BOOK_BY_FILTER_FAILURE = 'BOOK_BY_FILTER_FAILURE';

export const BOOK_SELECTED = "BOOK_SELECTED";
export const BOOK_IN_CART = "BOOK_IN_CART";
export const BOOK_REMOVE_FROM_CART = "BOOK_REMOVE_FROM_CART";

/*===============================
 * CART
 *  ADD
 *  REMOVE
 * ==============================*/

export function bookInCart (book) {
    return {
        type: BOOK_IN_CART,
        book
    }
}

export function removeBookFromCart () {
    return {
        type: BOOK_REMOVE_FROM_CART,
    }
}

/*===============================
* BOOKS
*   REQUEST
*   RECEIVE
*   FAILURE
* ==============================*/

export function requestBooksByFilter() {
    return {
        type: BOOK_BY_FILTER_REQUEST,
        isFetching: true,
    }
}

export function receiveBooksByFilter(books) {
    return {
        type: BOOK_BY_FILTER_SUCCESS,
        isFetching: false,
        books
    }
}

export function failureBooksRequest(errorMessage) {
    return {
        type: BOOK_BY_FILTER_FAILURE,
        isFetching: false,
        errorMessage
    }
}

export function outputBookByFilter(category) {


    return (dispatch) => {

        dispatch(requestBooksByFilter());

        return AxiosBooks.get(category)
            .then(response => {
                if (response.data.length === 0) {
                    dispatch(failureBooksRequest('No books in that category'));
                    return Promise.reject(response)
                }

                return response.data;
            })
            .then(data => {
                dispatch(receiveBooksByFilter(data))
            })
            .catch(error => console.log(error));
    };
}

//BOOK SELECT

export function selectBookByFilter (book) {
    return {
        type: BOOK_BY_FILTER_SELECTED,
        book
    }
}

export function selectBook (book) {
    return {
        type: BOOK_SELECTED,
        book
    }
}