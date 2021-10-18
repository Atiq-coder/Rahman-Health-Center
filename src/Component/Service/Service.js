import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { title, text, img, price } = props.service;
    return (
        <div>
            {/* Product card */}
            <Col className="p-4 product-card">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Text><strong>Price: ${price}</strong></Card.Text>
                        <Button variant="secondary">Buy Now</Button>
                        <Button className="ms-3" variant="secondary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;