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
                <div
                    className={'row'}
                >
                    {
                        daysToDisplay.map(
                            (day) =>
                                <div
                                    className={'MonthView-dayWrapper'}
                                    style={{
                                        borderColor: day ? 'black' : 'white'
                                    }}
                                >
                                    {
                                        day &&
                                        <p
                                            style={day.get('date') === moment().get('date') ? {fontWeight: 'bold'} : {fontWeight: 'regular'}}
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