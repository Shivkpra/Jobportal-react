import React, { useState } from "react";
import signup from "../../Components/Images/Signup.jpg";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
import Footer from "./Footer";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { SignUp } from "../Services/redux/Actions";

var format = {
  "email": String,
  "full_name": String,
  "role": String
}


function Signup() {
  const [data, setData] = useState(format)

  const dispatch = useDispatch()
  const dataHandler = (e) => {
    e.preventDefault()
    dispatch(SignUp(data))
  }
  return (
    <div className="main-signup">
      <div className="signup-image">
        <div className="signup-text">
          <h1>Let's Register yourself to come one more step closer to </h1>
          <span className="span-text">your Dream Job</span>
        </div>
        <img src={signup} width="1533" height="600" alt="Signup" />
      </div>
      <div>
        <div className="form">
          <div style={{ display: "block", width: 700, padding: 30 }}>
            <h4>Register Here</h4>
            <Form>
              <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control
                  value={data.full_name}
                  onChange={(e) => {
                    setData({ ...data, full_name: e.target.value })
                  }}
                  type="text"
                  placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value })
                  }}
                  type="email"
                  placeholder="Enter your your email address"
                />
              </Form.Group>
              <br />
              <select class="form-select" aria-label="Default select example" onChange={(e)=>{
                setData({...data, role: e.target.value});
              }}>
                <option value="COMPANY">Company</option>
                <option value="TALENT">Talent</option>

              </select>

              <br />
              <Button variant="primary" type="submit" onClick={(e) => dataHandler(e)}>
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
