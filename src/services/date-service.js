import moment from 'moment';

import {MONTHS} from '../constants/enums';

export const WEEK_FORMAT = 'MMM Do';

export const getMonth = (month) => MONTHS[month.month()];

export const getMonthMinusOne = (month) => moment(month).subtract(1, 'M');

export const getMonthPlusOne = (month) => moment(month).add(1, 'M');

export const getMonthHeaderText = (month) => `${getMonth(month)} ${month.year()}`;

export const getWeekMinusOne = (week) => moment(week).subtract(1, 'w');

export const getWeekPlusOne = (week) => moment(week).add(1, 'w');

export const getFirstDayOfWeek = (week) => week.isoWeekday(1);

export const getLastDayOfWeek = (week) => getWeekPlusOne(week).isoWeekday(0);

export const getWeekHeaderText = (week) => `${getFirstDayOfWeek(week).format(WEEK_FORMAT)} - ${getLastDayOfWeek(week).format(WEEK_FORMAT)}`;

export const getDayMinusOne = (day) => moment(day).subtract(1, 'd');

export const getDayPlusOne = (day) => moment(day).add(1, 'd');

export const isToday = (day) => day.format() === moment().format();
