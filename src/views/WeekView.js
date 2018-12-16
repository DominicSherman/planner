import React, {Component} from 'react';
import moment from 'moment';
import '../css/views/WeekView.css';

export default class WeekView extends Component {
    render() {
        let days = [];

        for (let i = 1; i <= 7; i++) {
            days = [...days, moment().isoWeekday(i)];
        }

        return (
            <div className={'WeekView row spaceBetween'}>
                {
                    days.map((day) =>
                        <div
                            className={'WeekView-day'}
                        >
                            <div className={'WeekView-dayHeader'}>
                                {
                                    day.get('day') === moment().get('day') ?
                                        <b><p>{day.format('dddd, MMMM Do')}</p></b>
                                        :
                                        <p>{day.format('dddd, MMMM Do')}</p>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}