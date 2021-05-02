import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'

const CustomCard = ({ verb, past, pastParticipe, meaning, finalSound, darkMode }) => {
    return (

        <Table striped bordered hover variant={darkMode ? "dark" : "light"} >
            <thead>
                <tr>
                    <th colSpan="2">{meaning}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Verb</td>
                    <td>{verb}</td>
                </tr>
                <tr>
                    <td>Past</td>
                    <td>{past}</td>
                </tr>
                <tr>
                    <td>Past Participe</td>
                    <td>{pastParticipe}</td>
                </tr>
                {finalSound &&
                    <tr>
                        <td>Final sound</td>
                        <td>{finalSound}</td>
                    </tr>
                }
            </tbody>
        </Table>

    )
}

CustomCard.propTypes = {
    verb: PropTypes.string,
    past: PropTypes.string,
    pastParticipe: PropTypes.string,
    meaning: PropTypes.string,
    finalSound: PropTypes.string,
    darkMode: PropTypes.bool,
}

export default CustomCard;
