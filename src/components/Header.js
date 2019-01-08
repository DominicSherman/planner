import React, {Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';

import '../css/components/Header.css';
import {DAY, MONTH, WEEK} from '../constants/view-types';
import {
    getDayMinusOne,
    getDayPlusOne,
    getFirstDayOfWeek,
    getMonth,
    getMonthHeaderText,
    getMonthMinusOne,
    getMonthPlusOne,
    getWeekHeaderText,
    getWeekMinusOne,
    getWeekPlusOne,
    WEEK_FORMAT
} from '../services/date-service';

export default class Header extends Component {
    getDisplayObject = () => {
        const {
            actions: {
                decrementMonth,
                incrementMonth,
                decrementWeek,
                incrementWeek,
                decrementDay,
                incrementDay
            },
            currMonth,
            currWeek,
            currDay
        } = this.props;

        if (currMonth && currWeek && currDay) {
            return {
                [MONTH]: {
                    prevText: getMonth(getMonthMinusOne(currMonth)),
                    prevOnClick: decrementMonth,
                    headerText: getMonthHeaderText(currMonth),
                    nextText: getMonth(getMonthPlusOne(currMonth)),
                    nextOnClick: incrementMonth
                },
                [WEEK]: {
                    prevText: getFirstDayOfWeek(getWeekMinusOne(currWeek)).format(WEEK_FORMAT),
                    prevOnClick: decrementWeek,
                    headerText: getWeekHeaderText(currWeek),
                    nextText: getFirstDayOfWeek(getWeekPlusOne(currWeek)).format(WEEK_FORMAT),
                    nextOnClick: incrementWeek
                },
                [DAY]: {
                    prevText: getDayMinusOne(currDay).format('dddd, MMMM Do'),
                    prevOnClick: decrementDay,
                    headerText: currDay.format('dddd, MMMM Do'),
                    nextText: getDayPlusOne(currDay).format('dddd, MMMM Do'),
                    nextOnClick: incrementDay
                }
            }
        }

        return {
            [MONTH]: {},
            [WEEK]: {},
            [DAY]: {}
        };
    };

    render() {
        const {actions: {setCurrView}, currView} = this.props;

        const displayValues = this.getDisplayObject()[currView];

        return (
            <div className={'Header-wrapper'}>
                <div className={'Header-headerWrapper row center'}>
                    <div className={'Header-menuWrapper'}>
                        <ButtonGroup>
                            <Button
                                onClick={() => setCurrView(MONTH)}
                                size={'30'}
                            >
                                Month View
                            </Button>
                            <Button
                                onClick={() => setCurrView(WEEK)}
                                size={'30'}
                            >
                                Week View
                            </Button>
                            <Button
                                onClick={() => setCurrView(DAY)}
                                size={'30'}
                            >
                                Day View
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className={'Header-textWrapper row spaceBetween'}>
                        <div
                            className={'Header-monthButton row center'}
                            onClick={displayValues.prevOnClick}
                        >
                            <h5>{`< ${displayValues.prevText}`}</h5>
                        </div>
                        <h1>{displayValues.headerText}</h1>
                        <div
                            className={'Header-monthButton row center'}
                            onClick={displayValues.nextOnClick}
                        >
                            <h5>{`${displayValues.nextText} >`}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}