import React from 'react';
import { render, screen } from '@testing-library/react'

import Speech from '../../../src/components/Speech';


describe('when componenet src/components/Speech.jsx is used', () => {
    beforeAll(() => {
        global.SpeechSynthesisUtterance = (text) => ({ text })
        global.speechSynthesis = {
            speak: jest.fn()
        }
    });
    afterAll(() => {F
        delete global.speechSynthesis;
        delete global.SpeechSynthesisUtterance;
    })
    
    describe('when Speech button is click', () => {
        it('should trigger a speech function ', () => {
            const shallowSpeech = shallow(<Speech text='hello' />);
            shallowSpeech.simulate('click');
            expect(speechSynthesis.speak.mock.calls.length).toBe(1);   
        });
    })
})