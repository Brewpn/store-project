import {
    CATEGORY_EDIT,
    CATEGORY_LIST_FETCH,
    CATEGORY_DELETE,
    CATEGORY_ADD,
    CATEGORY_SELECT,
    CATEGORY_FAILURE
} from '../actions'
import _ from 'lodash'

export default function categories(state = {
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
        case CATEGORY_SELECT:
            return Object.assign({}, state, {
                selectedCategory: action.category
            });
        case CATEGORY_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        default:
            return state
    }
}