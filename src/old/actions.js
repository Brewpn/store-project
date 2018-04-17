import axios from 'axios'
import {sessionService} from 'redux-react-session';
import {Authorize} from './api/auth'
import {AxiosCategories, AxiosBooks} from './api/booksAndCategories'

const BASE_URL = 'https://bookey-st.herokuapp.com';



export const PIE_CHART_REQUEST = 'PIE_CHART_REQUEST';
export const PIE_CHART_SUCCESS = 'PIE_CHART_SUCCESS';
export const PIE_CHART_FAILURE = 'PIE_CHART_FAILURE';

export const SELECT_DATA_FOR_CHART = "SELECT_DATA_FOR_CHART";




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


