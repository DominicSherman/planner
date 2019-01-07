import React, {Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import './css/App.css';
import './css/Flex.css';
import './css/Buttons.css';
import WeekView from './views/WeekView';
import {DAY, MONTH, WEEK} from './constants/view-types';
import DayView from './views/DayView';
import MonthView from './views/MonthView';

const typeToView = {
    [MONTH]: MonthView,
    [DAY]: DayView,
    [WEEK]: WeekView
};
export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => this.setState((prevState) => ({dropdownOpen: !prevState.dropdownOpen}));

    render() {
        const {actions, currView} = this.props;

        const View = typeToView[currView];

        return (
            <div>
                <div className={'App-menuWrapper'}>
                    <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                    >
                        <DropdownToggle caret>Menu</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => actions.setCurrView(MONTH)}>Month View</DropdownItem>
                            <DropdownItem onClick={() => actions.setCurrView(WEEK)}>Week View</DropdownItem>
                            <DropdownItem onClick={() => actions.setCurrView(DAY)}>Day View</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <View {...this.props} />
            </div>
        );
    }
}
