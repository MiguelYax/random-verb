import React from 'react';
import Table from '../../../src/components/Table';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const darkProps = {
    "verb": "Wake up",
    "past": "Woke up",
    "pastParticiple": "Woken up",
    "meaning": "Despertar",
    "finalSound": "",
    "darkMode": true
}

describe('When src/components/Table.jsx is used', () => {
    it('should render a table component', () => {
        const shallowTable = shallow(<Table {...darkProps} />)
        expect(shallowTable).toMatchSnapshot();
    });
    it('should render light mode and render final sound', () => {
        const lightProps = {
            ...darkProps,
            finalSound: "T",
            darkMode: false
        }
        const shallowTable = shallow(<Table {...lightProps} />)
        expect(shallowTable).toMatchSnapshot();
    });
});