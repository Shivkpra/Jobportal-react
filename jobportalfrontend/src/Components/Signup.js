import React from "react";
import signup from "../images/Signup.jpg";
import {
  Form,
  Button,

} from "react-bootstrap";
import "./Signup.css";
import HomeScreen from "./HomeScreen";


function Signup() {
  return (
    <div className="main-signup">
        
      <div className="signup-image">
        <div className="signup-text">
          <h1>Let's Register yourself to come one more step closer to </h1>
          <span className="span-text">your Dream Job</span>
        </div>
        <img src={signup} width="1533" height="600" />
        </div>
        <div>
        <div className="form">
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>React-Bootstrap Form Component</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>
      </Form>
    </div>      </div>
        </div>

    
    </div>
    
  );
}

export default Signup;
