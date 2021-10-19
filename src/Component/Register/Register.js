// import React from 'react';
// import { Button, Form, Row } from 'react-bootstrap';
// import { Link, useLocation, useHistory } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// const Register = () => {
//     const { signInUsingGoogle, handleRegistration,
//         handlePasswordInput, handleEmailInput,
//         error, toggle } = useAuth();
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_Uri = location.state?.from || '/home';

//     const handleGoogleSignIn = () => {
//         signInUsingGoogle()
//             .then(result => {
//                 history.push(redirect_Uri);
//             })
//             .catch(error => {
//                 console.log(error.message);
//             })
//     }
//     return (
//         <div className="container form">
//             <Form className="py-5 mx-auto" onSubmit={handleRegistration}>
//                 <h2 className="text-center">Register</h2>
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                     <Row className="g-2">

//                         <Form.Label><b>Your Name</b></Form.Label>
//                         <Form.Control required type="text" placeholder="Your Name" />

//                         <Form.Label><b>Your Email</b></Form.Label>
//                         <Form.Control required onBlur={handleEmailInput} type="email" placeholder="Your Email" />

//                         <Form.Label><b>Your Password</b></Form.Label>
//                         <Form.Control onBlur={handlePasswordInput} required type="password" placeholder="Your Password" />
//                         <Form.Label><b>Re-enter Password</b></Form.Label>
//                         <Form.Control type="password" placeholder="Re-enter Password" />
//                         <div className="text-danger">{error}</div>

//                         <Form.Control className="w-25" type="submit" placeholder="Submit" />
//                     </Row>
//                 </Form.Group>
//                 <p>Already have an account? <Link to="/login">LogIn</Link></p>
//             </Form>
//             <Button onClick={handleGoogleSignIn} className="btn-regular">Google sign in</Button>

//         </div>
//     );
// };

// export default Register;