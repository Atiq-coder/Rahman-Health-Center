import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Doctor = (props) => {
    const { name, specialities, onDuty, img, price } = props.doctor;
    const { handleGetAppointment } = useAuth();
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