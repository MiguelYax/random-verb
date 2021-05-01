import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from './Card';
import { getRandomVerb } from './Random';
import Navigation from './Navigation';

// import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [verb, setVerb] = useState(getRandomVerb());
    return (<>
        <Navigation />
        <Container className="vh-100" >
            <Row className="justify-content-md-center">
                <Col sm={10} md={8} lg={6} >
                    <Card type='primary' header="Meaning" title={verb.meaning} finalSound={verb.finalSound} />
                    <Card type='info' header="Present" title={verb.verb} finalSound={verb.finalSound} />
                    <Card type='success' header="Past" title={verb.past} finalSound={verb.finalSound} />
                    <Card type='warning' header="Past participe" title={verb.pastParticipe} finalSound={verb.finalSound} />
                </Col>
            </Row>
            <Row xs={2} md={4} lg={10} className="justify-content-md-center">
                <Button onClick={() => {
                    setVerb(getRandomVerb());
                }} > Next </Button>
            </Row>
        </Container>
    </>
    )
}

export default App;
