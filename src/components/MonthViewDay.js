import React, {Component} from 'react'
import {isToday} from '../services/moment-service';
import {DAY} from '../constants/view-types';

export default class MonthViewDay extends Component {
    _getBorderColor = () => this.props.day ? 'black' : 'white';

    _getFontWeight = () => isToday(this.props.day) ? 'bold' : 'regular';

    render() {
        const {
            actions: {
                setCurrDay,
                setCurrView
            },
            day
        } = this.props;

        const handlePress = () => {
            setCurrDay(day);
            setCurrView(DAY);
        };

        return (
            <div
                className={'MonthView-dayWrapper'}
                style={{borderColor: this._getBorderColor()}}
                onClick={handlePress}
            >
                {
                    day &&
                    <p style={{fontWeight: this._getFontWeight}}>
                        {day.format('Do')}
                    </p>
                }
            </div>
        )
    }
}