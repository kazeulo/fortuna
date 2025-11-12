import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import '../../css/main pages/userAuth.css';

const Login = () => {
  return (
    <Container className="login position-relative d-flex flex-column justify-content-center align-items-center vh-100">

      <Link to="/" className="position-absolute top-0 start-0 m-4">
        <button className="back-btn d-flex align-items-center gap-2">
            <FaArrowLeft /> Back
        </button>
      </Link>

      <Form className="userAuth-form w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-3 primary-font">Log In</h2>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Button type="submit" className="primary-button w-100 mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;