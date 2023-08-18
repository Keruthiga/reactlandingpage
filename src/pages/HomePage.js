import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import CarCard from '../components/CarCard';
import Footer from '../components/Footer';


const cars = [
  {
    model: 'Car Model 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'car1.webp', 
  },
  {
    model: 'Car Model 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'car2.jpg', 
  },
  {
    model: 'Car Model 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'car3.webp', 
  },
];

const HomePage = () => {
    return (
        <div>
            <Header />
            <Container className="my-5">
                <h2 className="text-center mb-4">Featured Cars</h2>
                <Row>
                    {cars.map((car, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <CarCard car={car} />
                        </Col>
                    ))}
                </Row>

            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;
