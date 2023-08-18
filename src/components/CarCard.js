import React from 'react';
import { Card, Button } from 'react-bootstrap';


const CarCard = ({ car }) => {
  return (
    <Card  className="border-secondary d-flex flex-column mb-4 h-100">
      <Card.Img variant="top" src={car.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{car.model}</Card.Title>
        <Card.Text>{car.description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default CarCard;

