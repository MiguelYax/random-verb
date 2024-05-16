import React from 'react';
import { render, screen } from '@testing-library/react'
import Table from '../../../src/components/Table';

const darkProps = {
    "verb": "Wake up",
    "past": "Woke up",
    "pastParticiple": "Woken up",
    "meaning": "Despertar",
    "finalSound": "",
    "darkMode": true,
    "example": "I woke up when the rooster crowed."
}

describe('When src/components/Table.jsx is used', () => {
    it('should render a table component', () => {
        render(<Table {...darkProps} />)
        expect(renderTable).toMatchSnapshot();
    });
    it('should render light mode and render final sound', () => {
        const lightProps = {
            ...darkProps,
            finalSound: "T",
            darkMode: false
        }
        render(<Table {...lightProps} />)
        expect(renderTable).toMatchSnapshot();
    });
});