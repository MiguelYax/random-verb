import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faAdjust } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Navigation = ({ darkMode, setDarkMode }) => {
    const navClassNames = classnames({
        "dark": darkMode,
        "light": !darkMode,
        'text-light': darkMode, 
        'text-primary': !darkMode
    });

    const buttonClassNames = classnames({
        "primary": !darkMode,
        "light": darkMode,
    })

    const textClassNames = classnames( {
        'text-light': darkMode, 
        'text-primary': !darkMode
    });
    
    return (
        <Navbar bg={navClassNames} expand="xl">
            <Navbar.Brand className={textClassNames} href="#home">
                <FontAwesomeIcon className="mr-2" icon={faRandom} />
                Random Verb
            </Navbar.Brand>
            <Nav>
                <Form inline>
                    <Button id="darkModeButton" variant={buttonClassNames} onClick={() => {
                        setDarkMode(prev => !prev);
                    }}>
                        <FontAwesomeIcon icon={faAdjust} />
                    </Button>
                </Form>
            </Nav>
        </Navbar>
    )
}

Navigation.propTypes = {
    darkMode: PropTypes.bool,
    setDarkMode: PropTypes.func,
}

export default Navigation;
