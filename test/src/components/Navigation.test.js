import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Navigation from '../../../src/components/Navigation'

describe('when component src/components/Navigation.jsx is used', () => {
    describe('when Navigation called with darkMode equal true', () => {
        it('shold be render the dark mode ', () => {
            const app = renderer.create(<Navigation darkMode={true} setDarkMode={() => {}} />).toJSON();
            expect(app).toMatchSnapshot();
        });
    });
    describe('when Navigation called with darkMode equal false', () => {
        it('shold be render the light mode ', () => {
            const app = renderer.create(<Navigation darkMode={false} setDarkMode={() => {}} />).toJSON();
            expect(app).toMatchSnapshot();
        });
    });
    describe('when darkMode button is cliked', () => {
        const setDarkMode = jest.fn();
        const NavigationMounted = mount((<Navigation darkMode={false} setDarkMode={setDarkMode} />));
        const darkModeButton = NavigationMounted.find('#darkModeButton');

        expect(darkModeButton.length).toBe(1);
        darkModeButton.simulate('click')
        expect(setDarkMode.mock.calls.length).toBe(1);
    });
});
