import fetch from 'cross-fetch'

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

function receiveLogin() {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
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

    let config = {
        method: 'POST',
        headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`
    };

    return dispatch => {

        dispatch(requestLogin());

        return fetch(`${process.env.BASE_URL}/`, config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
                if (!response.ok) {
                    dispatch(loginError(user.message));
                    return Promise.reject(user)
                } else {

                    localStorage.setItem('id_token', user.tokens.id_token);
                    localStorage.setItem('access_token', user.tokens.access_token);

                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log("Error: ", err))
    }
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

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
        dispatch(receiveLogout())
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