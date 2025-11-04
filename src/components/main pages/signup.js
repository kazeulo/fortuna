import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import '../../css/main pages/userAuth.css';

const Signup = () => {

    return (
        <Container>
            <Link to="/">
                <button className="back-btn my-4">Back</button>
            </Link>

            <Form className="userAuth-form mx-auto">
                <h2 className="text-center mb-3">Sign Up</h2>
                <div className="d-flex gap-3">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter last name" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter password" />
                </Form.Group>

                <Button type="submit" className="primary-button mt-3">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Signup;