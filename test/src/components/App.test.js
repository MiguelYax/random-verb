import React from 'react';
import renderer from 'react-test-renderer';

let App;
jest.mock('../../../src/components/Random', () => ({
    getRandomVerb: () => ({
        "verb": "Wake up",
        "past": "Woke up",
        "pastParticiple": "Woken up",
        "meaning": "Despertar",
        "finalSound": ""
    })
}));

describe('when component src/components/App.jsx is used', () => {
    beforeEach(() => {
        App = require('../../../src/components/App').default;
    })
    it('shold be render main components', () => {
        const app = renderer.create(<App />).toJSON();
        expect(app).toMatchSnapshot();
    });
});
