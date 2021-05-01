import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const CustomCard = ({ header, title, type, finalSound }) => {
    return (
        <Card bg={type} className="mb-2">
            <Card.Header>{header}</Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{finalSound} </Card.Text>
        </Card>
    )
}

CustomCard.propTypes = {
    header: PropTypes.string, 
    title: PropTypes.string, 
    type: PropTypes.string, 
    finalSound: propTypes.string,
}

export default CustomCard;
