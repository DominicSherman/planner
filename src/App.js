import React, {Component} from 'react';
import './css/App.css';
import './css/Flex.css';
import './css/Buttons.css';
import WeekView from './views/WeekView';
import {DAY, WEEK} from './constants/view-types';
import DayView from './views/DayView';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: WEEK
        }
    }

    render() {
        return (
            <div>
                <div className={'App-buttonWrapper row spaceEvenly'}>
                    <div
                        className={'Buttons-mediumFont'}
                        onClick={() => this.setState({view: WEEK})}
                    >
                        {'Week'}
                    </div>
                    <div
                        className={'Buttons-mediumFont'}
                        onClick={() => this.setState({view: DAY})}
                    >
                        {'Day'}
                    </div>
                </div>
                {
                    this.state.view === WEEK ?
                        <WeekView/>
                        :
                        <DayView/>
                }
            </div>
        );
    }
}
