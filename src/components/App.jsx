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



const App = () => {
    const [verb, setVerb] = useState(getRandomVerb());
    const [darkMode, setDarkMode] = useState(false);
    const containerClassNames = classnames(
        "vh-100",
        {
            "bg-dark": darkMode,
        }
    )
    return (
        <>
            <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
            <Container className={containerClassNames} >
                <Row className="h-75 pt-5 justify-content-md-center">
                    <Col md={10} lg={10} >
                        <Table darkMode={darkMode} {...verb} />
                    </Col>
                </Row>
                <Row md={10} lg={10} className="pt-5 justify-content-center">
                    <Button variant={darkMode ? "dark" : "primary"} onClick={() => {
                        setVerb(getRandomVerb());
                    }} > Randomize
                    <FontAwesomeIcon className="ml-2" icon={faSyncAlt} />
                    </Button>
                </Row>
            </Container>
        </>
    )
}

export default App;
