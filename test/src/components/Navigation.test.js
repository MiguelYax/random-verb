import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Navigation from '../../../src/components/Navigation';

describe('when component src/components/Navigation.jsx is used', () => {
    describe('when Navigation called with darkMode equal true', () => {
        it('shold be render the dark mode ', () => {
            const app = shallow(<Navigation darkMode={true} setDarkMode={() => { }} />)
            expect(app).toMatchSnapshot();
        });
    });
    describe('when Navigation called with darkMode equal false', () => {
        it('should be render the light mode ', () => {
            const app = shallow(<Navigation darkMode={false} setDarkMode={() => { }} />)
            expect(app).toMatchSnapshot();
        });
    });
    describe('when darkMode button is cliked', () => {
        it('should be triger change value for darkMode', () => {
            const setDarkMode = jest.fn( );
            const shallowNavigation =  shallow(<Navigation darkMode={false} setDarkMode={setDarkMode} />);
            const darkModeButton = shallowNavigation.find('#darkModeButton');

            expect(darkModeButton.length).toBe(1);
            darkModeButton.simulate('click')
            expect(setDarkMode.mock.calls.length).toBe(1);
        });
    });
});
