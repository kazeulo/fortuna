import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import '../../css/main pages/userAuth.css';

const Login = () =>{

    return(
        <Container className="login">
            <Link to="/">
                <button className="back-btn my-4">Back</button>
            </Link>
            
            <Form className="userAuth-form mx-auto">
                <h2 className="text-center mb-3">Log In</h2>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />

                <Button type="submit" className="primary-button mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;