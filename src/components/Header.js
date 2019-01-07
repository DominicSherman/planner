import React, {Component} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import moment from 'moment';

import '../css/components/Header.css';
import {DAY, MONTH, WEEK} from '../constants/view-types';
import {MONTHS} from '../constants/enums';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => this.setState((prevState) => ({dropdownOpen: !prevState.dropdownOpen}));

    render() {
        const {actions, currMonth} = this.props;
        const prevMonthValue = MONTHS[moment(currMonth).subtract(1, 'M').month()];
        const nextMonthValue = MONTHS[moment(currMonth).add(1, 'M').month()];

        return (
            currMonth ?
                <div>
                    <div className={'Header-headerWrapper row spaceBetween'}>
                        <div>
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
                        <div className={'Header-textWrapper row center'}>
                            <h1>{`${MONTHS[currMonth.month()]} ${currMonth.year()}`}</h1>
                        </div>
                    </div>
                    <div className={'Header-headerWrapper row spaceBetween'}>
                        <div className={'Header-textWrapper row spaceBetween'}>
                            <div
                                className={'MonthView-monthButton row center'}
                                onClick={actions.decrementMonth}
                            >
                                <h3>{`< ${prevMonthValue}`}</h3>
                            </div>
                            <div
                                className={'MonthView-monthButton row center'}
                                onClick={actions.incrementMonth}
                            >
                                <h3>{`${nextMonthValue} >`}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
        )
    }
}