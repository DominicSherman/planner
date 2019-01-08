import {
    SET_CURR_DAY,
    SET_CURR_MONTH,
    SET_CURR_VIEW,
    SET_CURR_WEEK,
    SET_DAYS_OF_MONTH,
    SET_LENGTH_OF_FIRST_WEEK
} from './action-types';
import {MONTH} from '../constants/view-types';

const defaultState = {
    currDay: null,
    currMonth: null,
    currWeek: null,
    currView: MONTH,
    daysOfMonth: [],
    lengthOfFirstWeek: 0
};

const reducerMap = {
    [SET_CURR_MONTH]: 'currMonth',
    [SET_DAYS_OF_MONTH]: 'daysOfMonth',
    [SET_LENGTH_OF_FIRST_WEEK]: 'lengthOfFirstWeek',
    [SET_CURR_VIEW]: 'currView',
    [SET_CURR_WEEK]: 'currWeek',
    [SET_CURR_DAY]: 'currDay'
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