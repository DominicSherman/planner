import React, {Component} from 'react';
import moment from 'moment';
import '../css/views/DayView.css';

export default class DayView extends Component {
    render() {
        return (
            <div className={'DayView row spaceBetween'}>
                {
                    <div
                        className={'DayView-day'}
                    >
                        <div className={'DayView-dayHeader'}>
                            <b><p>{moment().format('dddd, MMMM Do')}</p></b>
                        </div>
                    </div>
                }
            </div>
        );
    }
}