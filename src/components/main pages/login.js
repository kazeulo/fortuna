import React from 'react';
import Container from 'react-bootstrap/Container'

const Login = () =>{

    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Never share your email with anyone else.
                    </Form.Text>
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