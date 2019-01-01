import React, {Component} from 'react';
import moment from 'moment';

export default class WeekOfMonth extends Component {
    render() {
        let {daysToDisplay} = this.props;

        if (daysToDisplay.length && daysToDisplay[0].date() === 1) {
            daysToDisplay = [...Array(7 - daysToDisplay.length), ...daysToDisplay];
        }

        return (
            daysToDisplay.length ?
                <div className={'row'}>
                    {
                        daysToDisplay.map(
                            (day, i) =>
                                <div
                                    className={'MonthView-dayWrapper'}
                                    key={i}
                                    style={{borderColor: day ? 'black' : 'white'}}
                                >
                                    {
                                        day &&
                                        <p
                                            style={day.format('M-D-Y') === moment().format('M-D-Y') ? {fontWeight: 'bold'} : {fontWeight: 'regular'}}
                                        >
                                            {day.format('Do')}
                                        </p>
                                    }
                                </div>
                        )
                    }
                </div>
                :
                null
        );
    }
}