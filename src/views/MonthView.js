import React, {Component} from 'react';
import moment from 'moment';

import '../css/views/MonthView.css';
import '../css/components/WeekOfMonth.css';
import {MONTHS, WEEKDAYS} from '../constants/enums';
import WeekOfMonth from '../components/WeekOfMonth';

export default class MonthView extends Component {
    componentDidMount() {
        this.props.actions.setCurrMonth(moment());
    }

    render() {
        const {actions, currMonth, daysOfMonth, lengthOfFirstWeek} = this.props;
        const prevMonthValue = MONTHS[moment(currMonth).subtract(1, 'M').month()];
        const nextMonthValue = MONTHS[moment(currMonth).add(1, 'M').month()];

        return (
            daysOfMonth.length ?
                <div className={'MonthView-wrapper column'}>
                    <div
                        className={'MonthView-headerWrapper row spaceBetween'}
                    >
                        <div
                            className={'MonthView-monthButton row center'}
                            onClick={actions.decrementMonth}
                        >
                            <h3>{`< ${prevMonthValue}`}</h3>
                        </div>
                        <h1>
                            {`${MONTHS[currMonth.month()]}, ${currMonth.year()}`}
                        </h1>
                        <div
                            className={'MonthView-monthButton row center'}
                            onClick={actions.incrementMonth}
                        >
                            <h3>{`${nextMonthValue} >`}</h3>
                        </div>
                    </div>
                    <div className={'row spaceBetween hundred'}>
                        {
                            [...Array(7).keys()].map((value) =>
                                <div
                                    className={'MonthView-dayHeaderWrapper row'}
                                    key={value}
                                >
                                    <h3>{WEEKDAYS[value]}</h3>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            [...Array(6).keys()].map((w) => {
                                const firstIndex = w === 0 ? 0 : 7 * (w - 1) + lengthOfFirstWeek;
                                const secondIndex = 7 * w + lengthOfFirstWeek;

                                return (
                                    <WeekOfMonth
                                        daysToDisplay={daysOfMonth.slice(firstIndex, secondIndex)}
                                        key={w}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
                :
                null
        );
    }
}