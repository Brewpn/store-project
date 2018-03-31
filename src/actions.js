import fetch from 'cross-fetch'
import { sessionService } from 'redux-react-session';
import { Authorize } from './api/auth'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const PIE_CHART_REQUEST = 'PIE_CHART_REQUEST';
export const PIE_CHART_SUCCESS = 'PIE_CHART_SUCCESS';
export const PIE_CHART_FAILURE = 'PIE_CHART_FAILURE';

export const SELECT_DATA_FOR_CHART = "SELECT_DATA_FOR_CHART";

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

export function loginUser(creds, history) {


    return (dispatch) => {

        dispatch(requestLogin());

        return Authorize.login(creds).then(response => {
            if (!response.ok) {
                dispatch(loginError('Wrong email ar password'));
                return Promise.reject(response)
            }

            return response.json();
        })
            .then(user => {
                dispatch(receiveLogin(user))
            });
    };
}

export function logoutUser (history) {
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


