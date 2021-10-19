import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const { signInUsingGoogle, handleRegistration, handlePasswordInput,
        handleEmailInput, error, toggle, isLogin, handleNameChange } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_Uri = location.state?.from || '/home';

    // handle Google SignIn
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_Uri);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="container form">
            <Form className="py-5 mx-auto" onSubmit={handleRegistration}>
                <h2 className="text-center">{isLogin ? 'Login' : 'Register'}</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row className="g-2">
                        {!isLogin && <div><Form.Label><b>Your Name</b></Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" required placeholder="Your Name" /></div>
                        }
                        <Form.Label><b>Your Email</b></Form.Label>
                        <Form.Control onBlur={handleEmailInput} type="email" required placeholder="Your Email" />
                        <Form.Label><b>Your Password</b></Form.Label>
                        <Form.Control onBlur={handlePasswordInput} type="password" required placeholder="Your Password" />
                        {!isLogin && <div>
                            <Form.Label><b>Re-Enter Password</b></Form.Label>
                            <Form.Control onBlur={handlePasswordInput} type="password" required placeholder="Re-Enter Password" />
                        </div>}
                        <div className="text-danger">{error}</div>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggle} type="checkbox" label="Already have an account?" />
                        </Form.Group>
                        <Form.Control className="w-25" type="submit" placeholder="Submit" />
                    </Row>
                </Form.Group>
            </Form>
            <Button variant="dark" onClick={handleGoogleSignIn} className="btn-regular">Google sign in</Button>
        </div>
    );
};

export default LogIn;