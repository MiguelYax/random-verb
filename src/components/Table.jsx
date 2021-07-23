import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import classnames from 'classnames';
import Speach from './Speech';


const CustomTable = ({ verb, past, pastParticiple, meaning, finalSound, darkMode, example }) => {
    const textClassNames = classnames({
        'text-light': darkMode,
        'text-primary': !darkMode
    });
    return (

        <Table className={textClassNames} striped bordered hover variant={darkMode ? "dark" : "light"} >
            <thead>
                <tr>
                    <th colSpan="3">{meaning}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Verb</td>
                    <td>{verb}</td>
                    <td><Speach text={verb} /></td>
                </tr>
               {past && <tr>
                    <td>Past</td>
                    <td>{past}</td>
                    <td><Speach text={past} /></td>
                </tr>}
                {pastParticiple &&
                    <tr>
                        <td>Past participle</td>
                        <td>{pastParticiple}</td>
                        <td><Speach text={pastParticiple} /></td>
                    </tr>
                }
                {finalSound &&
                    <tr>
                        <td>Final sound</td>
                        <td colSpan="2">{finalSound}</td>
                    </tr>
                }
                {example &&
                    <tr>
                        <td>Example</td>
                        <td>{example}</td>
                        <td><Speach text={example} /></td>
                    </tr>
                }
            </tbody>
        </Table>

    )
}

CustomTable.propTypes = {
    verb: PropTypes.string,
    past: PropTypes.string,
    pastParticiple: PropTypes.string,
    meaning: PropTypes.string,
    finalSound: PropTypes.string,
    example: PropTypes.string,
    darkMode: PropTypes.bool,
}

export default CustomTable;
