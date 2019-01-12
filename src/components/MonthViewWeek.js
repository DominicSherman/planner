import React, {Component} from 'react';
import MonthViewDay from './MonthViewDay';

export default class MonthViewWeek extends Component {
    render() {
        let {actions, daysToDisplay} = this.props;

        if (daysToDisplay.length) {
            if (daysToDisplay[0].date() === 1) {
                daysToDisplay = [...Array(7 - daysToDisplay.length), ...daysToDisplay];
            }
        } else {
            return null;
        }

        return (
            <div className={'row'}>
                {daysToDisplay.map((day) =>
                    <MonthViewDay
                        actions={actions}
                        day={day}
                    />
                )}
            </div>
        );
    }
}