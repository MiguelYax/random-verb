import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from './Table';
import { getRandomVerb } from './Random';
import Navigation from './Navigation';

import './app.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [verb, setVerb] = useState(getRandomVerb());
    return (<>
        <Navigation />
        <Container className="vh-100 " >
            <Row className="h-75 justify-content-md-center">
                <Col md={10} lg={10} >
                    <Table {...verb} />
                </Col>
            </Row>
            <Row md={10} lg={10} className="justify-content-center">
                <Button onClick={() => {
                    setVerb(getRandomVerb());
                }} > Next </Button>
            </Row>
        </Container>
    </>
    )
}

export default App;
