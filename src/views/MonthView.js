import React, {Component} from 'react';
import moment from 'moment';

import '../css/views/MonthView.css';
import '../css/components/WeekOfMonth.css';
import {MONTHS, WEEKDAYS} from '../constants/enums';
import WeekOfMonth from '../components/WeekOfMonth';

export default class MonthView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevMonth: 0,
            currMonth: 0,
            nextMonth: 0,
            daysOfMonth: [],
            lengthOfFirstWeek: 0
        }
    }

    componentDidMount() {
        this.setCurrMonth(moment().month());
    }

    setDaysOfMonth = (month) => {
        let daysOfMonth = [];

        for (let i = 1; i <= 31; i++) {
            if (moment().month(month).date(i).get('month') === month) {
                daysOfMonth = [...daysOfMonth, moment().month(month).date(i)];
            }
        }

        this.setState({daysOfMonth});
        this.setState({lengthOfFirstWeek: 8 - daysOfMonth[0].day()});
    };

    setCurrMonth = (currMonth) => {
        this.setState({prevMonth: moment().month(currMonth).subtract(1, 'M').month()});
        this.setState({currMonth});
        console.log(moment().month(currMonth).add(1, 'M'));
        this.setState({nextMonth: moment().month(currMonth).add(1, 'M').month()});
        this.setDaysOfMonth(currMonth);
    };

    decrementMonth = () => {
        this.setCurrMonth(this.state.prevMonth);
    };

    incrementMonth = () => {
        this.setCurrMonth(this.state.nextMonth);
    };

    render() {
        return (
            this.state.daysOfMonth.length ?
                <div className={'MonthView-wrapper column'}>
                    <div
                        className={'MonthView-headerWrapper row spaceBetween'}
                    >
                        <div
                            className={'MonthView-monthButton row center'}
                            onClick={this.decrementMonth}
                        >
                            <h3>{`< ${MONTHS[this.state.prevMonth]}`}</h3>
                        </div>
                        <h1>
                            {MONTHS[this.state.currMonth]}
                        </h1>
                        <div
                            className={'MonthView-monthButton row center'}
                            onClick={this.incrementMonth}
                        >
                            <h3>{`${MONTHS[this.state.nextMonth]} >`}</h3>
                        </div>
                    </div>
                    <div className={'row'}>
                        {
                            [...Array(7).keys()].map((value) =>
                                <div className={'MonthView-dayHeaderWrapper row'}>
                                    <h3>{WEEKDAYS[value]}</h3>
                                </div>)
                        }
                    </div>
                    <div>
                        {
                            [...Array(6).keys()].map((w) => {
                                const firstIndex = w === 0 ? 0 : 7 * (w - 1) + this.state.lengthOfFirstWeek;
                                const secondIndex = 7 * w + this.state.lengthOfFirstWeek;

                                return (
                                    <WeekOfMonth
                                        daysToDisplay={this.state.daysOfMonth.slice(firstIndex, secondIndex)}
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