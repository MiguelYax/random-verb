import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from './Table';
import { getRandomVerb } from './Random';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import './app.scss'
import classnames from 'classnames';
import { version } from '../../package.json';



const App = () => {
    const [verb, setVerb] = useState(getRandomVerb());
    const [darkMode, setDarkMode] = useState(false);
    const containerClassNames = classnames(
        "vh-100 mw-100",
        {
            "bg-dark": darkMode,
        }
    )
    const buttonClassNames = classnames({
        "primary": !darkMode,
        "light": darkMode,
    })

    const textClassNames = classnames( {
        'text-light': darkMode, 
        'text-primary': !darkMode
    });


    return (
        <>
            <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container className={containerClassNames} >
                <Row className="h-75 pt-5 justify-content-md-center">
                    <Col md={10} lg={10} >
                        <Table darkMode={darkMode} {...verb} />
                    </Col>
                </Row>
                <Row md={10} lg={10} className="pt-2 justify-content-center">
                    <Button variant={buttonClassNames} onClick={() => {
                        setVerb(getRandomVerb());
                    }} > Randomize
                    <FontAwesomeIcon className="ml-2" icon={faSyncAlt} />
                    </Button>
                </Row>
                <Row className=" pt-3 justify-content-center">
                     <div className={textClassNames}>Version {version} </div>  
                </Row>
            </Container>
        </>
    )
}

export default App;
