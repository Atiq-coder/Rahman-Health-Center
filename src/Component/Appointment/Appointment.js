import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="container">
            <Form className="form py-5 mx-auto">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row className="g-2">
                        <Col md>
                            <Form.Label><b>Your Name</b></Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Col>
                        <Col md>
                            <Form.Label><b>Your Email</b></Form.Label>
                            <Form.Control type="email" placeholder="Your Email" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row className="g-2">
                        <Col md>
                            <Form.Label><b>Your Phone</b></Form.Label>
                            <Form.Control type="number" placeholder="Your Phone" />
                        </Col>
                        <Col md>
                            <Form.Label><b>Appointment date</b></Form.Label>
                            <Form.Control type="text" placeholder="Appointment date" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Message</b></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark">Submit</Button>
            </Form>
        </div>
    );
};

export default Appointment;