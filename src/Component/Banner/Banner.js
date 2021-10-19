import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="height d-block w-100"
                        src="https://image.freepik.com/free-photo/my-little-friend-makes-me-feel-brave_329181-7660.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Happy to see you healthy</h3>
                        <p>The trusted and friendly medical professionals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="height d-block w-100"
                        src="https://image.freepik.com/free-photo/your-medical-results-are-satisfactory_329181-7691.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We are committed to provide affordable services</h3>
                        <p>Our Pathology division offers a comprehensive range of laboratory.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="height d-block w-100"
                        src="https://image.freepik.com/free-photo/my-daughter-isn-t-afraid-pay-visit-here_329181-7634.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The art of our medical services</h3>
                        <p>We have talent, experienced, reputed and dynamic doctors in our team working in a growing practice. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;