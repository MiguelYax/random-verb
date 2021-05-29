import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const Speach = ({
    text,
    volume = 0.5,
    lang = 'en-US'
}) => {
    return (
        <Button id="darkModeButton" onClick={() => {
            let utterance = new SpeechSynthesisUtterance(text);
            Object.apply(utterance, { volume, lang });

            speechSynthesis.speak(utterance);
        }}>
            <FontAwesomeIcon icon={faVolumeUp} />
        </Button>

    )
}

Speach.propTypes = {
    text: PropTypes.string.isRequired,
    volume: PropTypes.number,
    lang: PropTypes.string,
}

export default Speach;
