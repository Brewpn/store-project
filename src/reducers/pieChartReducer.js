import {
    PIE_CHART_FAILURE,
    PIE_CHART_REQUEST,
    PIE_CHART_SUCCESS
} from '../actions'

export default function pieChart( state = {
    isFetching: false,
    pieChartData: {}
}, action) {
    switch (action.type) {
        case PIE_CHART_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case PIE_CHART_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                pieChartData: action.data,
                errorMessage: ''
            });
        case PIE_CHART_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                pieChartData: {},
                errorMessage: action.message
            });
        default:
            return state
    }
}