import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './contact.css'; // Import custom CSS for additional styling

function AppointmentForm() {
  return (
    <Container className="appointment-form-container my-5">
      <h2 className="text-center">Contact Form</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AppointmentForm;
