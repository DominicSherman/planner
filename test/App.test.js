import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import moment from 'moment';

import App from '../src/App';
import {chance} from './chance';
import Header from '../src/components/Header';
import {DAY, MONTH, TO_DO, WEEK} from '../src/constants/view-types';
import MonthView from '../src/views/MonthView';
import {initializeFirebase} from '../src/services/firebase-service';

jest.mock('moment');
jest.mock('../src/services/firebase-service');

describe('App', () => {
    let expectedProps,
        expectedMoment,

        renderedComponent,
        renderedInstance,

        renderedHeader,
        renderedView;

    const cacheChildren = () => {
        [
            renderedHeader,
            renderedView
        ] = renderedComponent.props.children;
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<App {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
        renderedInstance = shallowRenderer.getMountedInstance();

        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = {
            actions: {
                setCurrMonth: jest.fn(),
                setCurrWeek: jest.fn(),
                setCurrDay: jest.fn()
            },
            currView: chance.pickone([MONTH, DAY, WEEK, TO_DO])
        };
        expectedMoment = chance.string();

        moment.mockReturnValue(expectedMoment);

        renderComponent();
    });

    describe('componentDidMount', () => {
        beforeEach(() => {
            renderedInstance.componentDidMount();
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('should set the currMonth', () => {
            expect(expectedProps.actions.setCurrMonth).toHaveBeenCalledTimes(1);
            expect(expectedProps.actions.setCurrMonth).toHaveBeenCalledWith(expectedMoment);
        });

        it('should set the currWeek', () => {
            expect(expectedProps.actions.setCurrWeek).toHaveBeenCalledTimes(1);
            expect(expectedProps.actions.setCurrWeek).toHaveBeenCalledWith(expectedMoment);
        });

        it('should set the currDay', () => {
            expect(expectedProps.actions.setCurrDay).toHaveBeenCalledTimes(1);
            expect(expectedProps.actions.setCurrDay).toHaveBeenCalledWith(expectedMoment);
        });

        it('should initalizeFirebase', () => {
            expect(initializeFirebase).toHaveBeenCalledTimes(1);
        });

        it('should call moment 3 times', () => {
            expect(moment).toHaveBeenCalledTimes(3);
        });
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });

    it('should render a Header', () => {
        expect(renderedHeader.type).toBe(Header);
        expect(renderedHeader.props).toEqual(expectedProps);
    });

    describe('View', () => {
        it('should render a MonthView if currView type is MONTH', () => {
            expectedProps.currView = MONTH;
            renderComponent();

            expect(renderedView.type).toBe(MonthView);
            expect(renderedView.props).toEqual(expectedProps);
        });
    });
});