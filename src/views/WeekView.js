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
            <div className={'WeekView row'}>
                {
                    days.map((day) =>
                        <div
                            className={'WeekView-day column'}
                        >
                            <div className={'WeekView-dayHeader'}>
                                <p
                                    style={day.get('day') === moment().get('day') ? {fontWeight: 'bold'} : {fontWeight: 'regular'}}
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