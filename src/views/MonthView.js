import React, {Component} from 'react';

import '../css/views/MonthView.css';
import '../css/components/WeekOfMonth.css';
import {WEEKDAYS} from '../constants/enums';
import WeekOfMonth from '../components/WeekOfMonth';

export default class MonthView extends Component {
    render() {
        const {daysOfMonth, lengthOfFirstWeek} = this.props;

        return (
            daysOfMonth.length ?
                <div className={'MonthView-wrapper column'}>
                    <div className={'row spaceBetween hundred'}>
                        {
                            [...Array(7).keys()].map((value) =>
                                <div
                                    className={'MonthView-dayHeaderWrapper row'}
                                    key={value}
                                >
                                    <h2>{WEEKDAYS[value]}</h2>
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