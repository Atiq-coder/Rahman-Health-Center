import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { name, specialities, onDuty, img, price } = props.doctor;
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><h4>{name}</h4></Card.Title>
                        <Card.Text><strong>Specialities:</strong> {specialities}</Card.Text>
                        <Card.Text><strong>Available:</strong> {onDuty}</Card.Text>
                        <Card.Text><strong>Fee: $</strong>{price}</Card.Text>
                        <Button variant="secondary">Get an appointment</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Doctor;