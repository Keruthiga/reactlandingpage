import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import CarCard from './components/CarCard';
import Footer from './components/Footer';

const cars = [
  {
    model: 'Car Model 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'car1.webp', // Replace with actual image URL
  },
  {
    model: 'Car Model 2',
    description: 'Praesent euismod urna in libero consequat.',
    image: 'car2.jpg', // Replace with actual image URL
  },
  // Add more car objects as needed
];

const App = () => {
  return (
    <div>
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Cars</h2>
        <Row>
          {cars.map((car, index) => (
            <Col key={index} md={4} className="mb-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

