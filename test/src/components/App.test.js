import React from 'react';
import { screen, render } from '@testing-library/react'
import App from '../../../src/components/App';
import { getRandomVerb } from '../../../src/components/Random';


jest.mock('../../../src/components/Random', () => ({
    getRandomVerb: jest.fn().mockReturnValue({
        "verb": "Wake up",
        "past": "Woke up",
        "pastParticiple": "Woken up",
        "meaning": "Despertar",
        "finalSound": ""
    })
}));

describe('when component src/components/App.jsx is used', () => {
    beforeEach(() => {
        getRandomVerb.mockReset()
    });

    it('shold be render main components', () => {
        render(<App />);

    });

    it('shold be render main components', () => {
        render(<App />);
        const shallowButton = screen.find('Button');
        shallowButton.click();
        expect(getRandomVerb).toHaveBeenCalledTimes(3);
    });
});
