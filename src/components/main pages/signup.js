import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import '../../css/main pages/userAuth.css';

const Signup = () => {
  return (
    <Container className="signup position-relative d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Back Button in Top-Left Corner */}
      <Link to="/" className="position-absolute top-0 start-0 m-4">
        <button className="back-btn d-flex align-items-center gap-2">
            <FaArrowLeft /> Back
        </button>
      </Link>

      {/* Centered Signup Form */}
      <Form className="userAuth-form w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-3 primary-font">Sign Up</h2>

        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-fill" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group className="mb-3 flex-fill" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter password" />
        </Form.Group>

        <Button type="submit" className="primary-button w-100 mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;