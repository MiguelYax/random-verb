import React from 'react';
import { render, screen } from '@testing-library/react';

import Navigation from '../../../src/components/Navigation';

describe('when component src/components/Navigation.jsx is used', () => {
    describe('when Navigation called with darkMode equal true', () => {
        it('shold be render the dark mode ', () => {
            render(<Navigation darkMode={true} setDarkMode={() => { }} />)
        });
    });
    describe('when Navigation called with darkMode equal false', () => {
        it('should be render the light mode ', () => {
            render(<Navigation darkMode={false} setDarkMode={() => { }} />)
        });
    });
    describe('when darkMode button is cliked', () => {
        it('should be triger change value for darkMode', () => {
            const setDarkMode = jest.fn();
             render(<Navigation darkMode={false} setDarkMode={setDarkMode} />);
            const darkModeButton = screen.find('#darkModeButton');
``
            expect(darkModeButton.length).toBe(1);
            darkModeButton.click()
            expect(setDarkMode.mock.calls.length).toBe(1);
        });
    });
});
