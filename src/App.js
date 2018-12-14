import React, {Component} from 'react';
import './css/App.css';
import moment from 'moment';
import {green, lightGray, white} from './constants/style-variables';

export default class App extends Component {
    render() {
        let days = [];

        for (let i = 1; i <= 7; i++) {
            days = [...days, moment().isoWeekday(i)];
        }

        days.forEach((day) => console.log(day.format('dddd, MMMM Do')));

        return (
            <div className={'App'}>
                {
                    days.map((day) =>
                        <div
                            className={'App-day'}
                            style={{backgroundColor: day.get('day') === moment().get('day') ? green : white}}
                        >
                            <p>{day.format('dddd, MMMM Do')}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
