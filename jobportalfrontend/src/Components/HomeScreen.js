import React from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'
function HomeScreen() {
  return (
    <div>
      <div className="form">
        <Form className="form-style">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="password" placeholder="Your name" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default HomeScreen;
