import {action} from '../constants/action';
import {SET_CURR_MONTH, SET_CURR_VIEW, SET_DAYS_OF_MONTH, SET_LENGTH_OF_FIRST_WEEK} from './action-types';
import moment from 'moment/moment';

export const setCurrView = (currView) => action(SET_CURR_VIEW, currView);

export const setLengthOfFirstWeek = (lengthOfFirstWeek) => action(SET_LENGTH_OF_FIRST_WEEK, lengthOfFirstWeek);

export const setDaysOfMonth = (currMonth) => (dispatch) => {
    let daysOfMonth = [];

    for (let i = 1; i <= 31; i++) {
        if (moment(currMonth).date(i).get('month') === currMonth.month()) {
            daysOfMonth = [...daysOfMonth, moment(currMonth).date(i)];
        }
    }

    dispatch(action(SET_DAYS_OF_MONTH, daysOfMonth));
    dispatch(setLengthOfFirstWeek(8 - (daysOfMonth[0].day() === 0 ? 7 : daysOfMonth[0].day())));
};

export const setCurrMonth = (currMonth) => (dispatch) => {
    dispatch(action(SET_CURR_MONTH, currMonth));
    dispatch(setDaysOfMonth(currMonth));
};

export const incrementMonth = () => (dispatch, getState) => dispatch(setCurrMonth(moment(getState().currMonth).add(1, 'M')));

export const decrementMonth = () => (dispatch, getState) => dispatch(setCurrMonth(moment(getState().currMonth).subtract(1, 'M')));
