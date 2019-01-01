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
            prevMonth: {},
            currMonth: {},
            nextMonth: {},
            daysOfMonth: [],
            lengthOfFirstWeek: 0
        }
    }

    componentDidMount() {
        this.setCurrMonth(moment());
    }

    setDaysOfMonth = (month) => {
        let daysOfMonth = [];

        for (let i = 1; i <= 31; i++) {
            if (moment(month).date(i).get('month') === month.month()) {
                daysOfMonth = [...daysOfMonth, moment(month).date(i)];
            }
        }

        this.setState({daysOfMonth});
        this.setState({lengthOfFirstWeek: 8 - (daysOfMonth[0].day() === 0 ? 7 : daysOfMonth[0].day())});
    };

    setCurrMonth = (currMonth) => {
        const prevMonth = moment(currMonth).subtract(1, 'M');
        const nextMonth = moment(currMonth).add(1, 'M');

        this.setState({currMonth});
        this.setState({prevMonth});
        this.setState({nextMonth});
        this.setDaysOfMonth(currMonth);
    };

    decrementMonth = () => {
        this.setCurrMonth(this.state.prevMonth);
    };

    incrementMonth = () => {
        this.setCurrMonth(this.state.nextMonth);
    };

    render() {
        console.log('this.state.lengthOfFirstWeek', this.state.lengthOfFirstWeek);
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
                            <h3>{`< ${MONTHS[this.state.prevMonth.month()]}`}</h3>
                        </div>
                        <h1>
                            {`${MONTHS[this.state.currMonth.month()]}, ${this.state.currMonth.year()}`}
                        </h1>
                        <div
                            className={'MonthView-monthButton row center'}
                            onClick={this.incrementMonth}
                        >
                            <h3>{`${MONTHS[this.state.nextMonth.month()]} >`}</h3>
                        </div>
                    </div>
                    <div className={'row'}>
                        {
                            [...Array(7).keys()].map((value) =>
                                <div
                                    className={'MonthView-dayHeaderWrapper row'}
                                    key={value}
                                >
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