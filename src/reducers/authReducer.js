import {SET_CURRENT_USER, GET_ERRORS} from '../actions/type';
import isEmpty from '../utils/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case GET_ERRORS:
        default:
            return state;
    }
}