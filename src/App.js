import React, {Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import './css/App.css';
import './css/Flex.css';
import './css/Buttons.css';
import WeekView from './views/WeekView';
import {DAY, MONTH, WEEK} from './constants/view-types';
import DayView from './views/DayView';
import MonthView from './views/MonthView';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            view: MONTH
        }
    }

    toggle = () => this.setState((prevState) => ({dropdownOpen: !prevState.dropdownOpen}));

    render() {
        return (
            <div>
                <div className={'App-menuWrapper'}>
                    <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggle}
                    >
                        <DropdownToggle caret>Menu</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.setState({view: MONTH})}>Month View</DropdownItem>
                            <DropdownItem onClick={() => this.setState({view: WEEK})}>Week View</DropdownItem>
                            <DropdownItem onClick={() => this.setState({view: DAY})}>Day View</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                {
                    this.state.view === MONTH &&
                    <MonthView/>
                }
                {
                    this.state.view === WEEK &&
                    <WeekView/>
                }
                {
                    this.state.view === DAY &&
                    <DayView/>
                }
            </div>
        );
    }
}
