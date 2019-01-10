import {action} from '../constants/action';
import {
    SET_CURR_DAY, SET_CURR_EDITING_ITEM,
    SET_CURR_MONTH,
    SET_CURR_VIEW,
    SET_CURR_WEEK,
    SET_DAYS_OF_MONTH,
    SET_LENGTH_OF_FIRST_WEEK, SET_TO_DO_ITEMS
} from './action-types';
import moment from 'moment/moment';
import {
    getDayMinusOne, getDayPlusOne,
    getMonthMinusOne,
    getMonthPlusOne,
    getWeekMinusOne,
    getWeekPlusOne
} from '../services/moment-service';
import {getToDoItems} from '../services/firebase-service';

export const setCurrView = (currView) => action(SET_CURR_VIEW, currView);

export const setLengthOfFirstWeek = (lengthOfFirstWeek) => action(SET_LENGTH_OF_FIRST_WEEK, lengthOfFirstWeek);

export const setDaysOfMonth = (currMonth) => (dispatch) => {
    let daysOfMonth = [];

    for (let i = 1; i <= 31; i++) {
        if (moment(currMonth).date(i).month() === currMonth.month()) {
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

export const setCurrWeek = (currWeek) => action(SET_CURR_WEEK, currWeek);

export const setCurrDay = (day) => action(SET_CURR_DAY, day);

export const incrementMonth = () => (dispatch, getState) => dispatch(setCurrMonth(getMonthPlusOne(getState().currMonth)));

export const decrementMonth = () => (dispatch, getState) => dispatch(setCurrMonth(getMonthMinusOne(getState().currMonth)));

export const incrementWeek = () => (dispatch, getState) => dispatch(setCurrWeek(getWeekPlusOne(getState().currWeek)));

export const decrementWeek = () => (dispatch, getState) => dispatch(setCurrWeek(getWeekMinusOne(getState().currWeek)));

export const incrementDay = () => (dispatch, getState) => dispatch(setCurrDay(getDayPlusOne(getState().currDay)));

export const decrementDay = () => (dispatch, getState) => dispatch(setCurrDay(getDayMinusOne(getState().currDay)));

export const setCurrEditingItem = (currEditingItem) => action(SET_CURR_EDITING_ITEM, currEditingItem);

const sortByTime = (a, b) => a.time < b.time ? 1 : -1;

export const setToDoItems = () => (dispatch) => getToDoItems().on('value', (snapshot) => {
    const dataObject = snapshot.val();

    if (dataObject) {
        dispatch(action(SET_TO_DO_ITEMS, Object.keys(dataObject).map((id) => dataObject[id]).sort(sortByTime)));
    } else {
        dispatch(action(SET_TO_DO_ITEMS, []))
    }
});