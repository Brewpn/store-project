import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
    BOOK_BY_FILTER_FAILURE,
    BOOK_BY_FILTER_SUCCESS,
    BOOK_BY_FILTER_REQUEST,
    BOOK_BY_FILTER_SELECTED,
    receiveBooksByFilter,
    failureBooksRequest
} from './actions'
import { AxiosBooks } from './api'

function* axiosBooksByFilter(action) {
    try {
        yield delay(1000);
        const books = yield call(AxiosBooks.get);
        yield put(receiveBooksByFilter(books));
    } catch (e) {
        yield put(failureBooksRequest(e));
    }
}

export default [
    takeLatest(BOOK_BY_FILTER_REQUEST, axiosBooksByFilter),
]