import React, {Component} from 'react';
import moment from 'moment';
import '../css/views/WeekView.css';
import {isToday} from '../services/date-service';

export default class WeekView extends Component {
    render() {
        const {currWeek} = this.props;

        let days = [];

        for (let i = 1; i <= 7; i++) {
            days = [...days, moment(currWeek).isoWeekday(i)];
        }

        return (
            <div className={'WeekView row'}>
                {
                    days.map((day) =>
                        <div
                            className={'WeekView-day column'}
                            key={day.format()}
                        >
                            <div className={'WeekView-dayHeader'}>
                                <p
                                    style={isToday(day) ? {fontWeight: 'bold'} : {fontWeight: 'regular'}}
                                >
                                    {day.format('dddd, MMMM Do')}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}