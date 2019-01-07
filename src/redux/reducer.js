import {SET_CURR_MONTH, SET_CURR_VIEW, SET_DAYS_OF_MONTH, SET_LENGTH_OF_FIRST_WEEK} from './action-types';
import {MONTH} from '../constants/view-types';

const defaultState = {
    currMonth: null,
    currView: MONTH,
    daysOfMonth: [],
    lengthOfFirstWeek: 0
};

const reducerMap = {
    [SET_CURR_MONTH]: 'currMonth',
    [SET_DAYS_OF_MONTH]: 'daysOfMonth',
    [SET_LENGTH_OF_FIRST_WEEK]: 'lengthOfFirstWeek',
    [SET_CURR_VIEW]: 'currView'
};

export default (state = defaultState, {type, data}) => {
    if (reducerMap[type]) {
        return {
            ...state,
            [reducerMap[type]]: data
        };
    }

    return state;
};