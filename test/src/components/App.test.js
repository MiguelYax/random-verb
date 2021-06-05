import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../src/components/App';
import { getRandomVerb } from '../../../src/components/Random';

configure({ adapter: new Adapter() });

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
        const shallowApp = shallow(<App />);
        expect(shallowApp).toMatchSnapshot();
    });

    it('shold be render main components', () => {
        const shallowApp = shallow(<App />);
        const shallowButton = shallowApp.find('Button');
        shallowButton.simulate('click');
        expect(getRandomVerb).toHaveBeenCalledTimes(3);
    });
});
