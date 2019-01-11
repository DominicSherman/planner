import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DayView from '../../src/views/DayView';

describe('DayView', () => {
    let renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<DayView />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        renderComponent();
    });

    it('should render a root div', () => {
        expect(renderedComponent.type).toBe('div');
    });
});