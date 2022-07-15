import React from "react";
import signup from "../../Components/Images/Signup.jpg";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
import Footer from "./Footer";
import Dropdown from "react-bootstrap/Dropdown";
function Signup() {
  const handlesumbit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualdata = {
      full_name: data.get("full_name"),
      email: data.get("email"),
      
    };
    
    console.log(actualdata);
  };
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
          <div style={{ display: "block", width: 700, padding: 30 }}>
            <h4>Register Here</h4>
            <Form  onSubmit={handlesumbit}>
              <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  name="full_name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your your email address"
                  name="email"
                />
              </Form.Group>
              <br />

              <Dropdown name="role">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  
                >
                  Role
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Company</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Talent</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br />

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
        <div className="Details">
          <h5>Address</h5>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <h5>Phone</h5>
          <p>+1 232 3235 324</p>
          <h5>Email</h5>
          <p>youremail@domain.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
