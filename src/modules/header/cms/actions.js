import Authorize from './api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

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

            history.replace('/login');
        }).catch(err => {
            throw (err);
        });
    };
}

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