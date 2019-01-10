import React, {Component} from 'react';
import moment from 'moment';

import './css/Flex.css';
import './css/Buttons.css';
import WeekView from './views/WeekView';
import {DAY, MONTH, TO_DO, WEEK} from './constants/view-types';
import DayView from './views/DayView';
import MonthView from './views/MonthView';
import Header from './components/Header';
import {initializeFirebase} from './services/firebase-service';
import ToDoView from './views/ToDoView';

const typeToView = {
    [MONTH]: MonthView,
    [DAY]: DayView,
    [WEEK]: WeekView,
    [TO_DO]: ToDoView
};

export default class App extends Component {
    componentWillMount() {
        const {actions: {setCurrMonth, setCurrWeek, setCurrDay}} = this.props;
        setCurrMonth(moment());

        setCurrWeek(moment());
        setCurrDay(moment());
        initializeFirebase();
    }

    render() {
        const {currView} = this.props;

        const View = typeToView[currView];

        return (
            <div>
                <Header {...this.props} />
                <View {...this.props} />
            </div>
        );
    }
}
