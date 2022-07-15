import React, { useState } from "react";
import signup from "../../Components/Images/Signup.jpg";
import { Form, Button } from "react-bootstrap";
import "./Signup.css";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Services/redux/Actions";
import { Link } from "react-router-dom";

function Login() {
  const[enterdEmail, setEnteredEmail]=useState('')
  const[enterdPassword, setEnteredPassword]=useState('')

  const dispatch = useDispatch()

  const loginHandler = (e) => {
      e.preventDefault();
      const login = {"email": enterdEmail, "password": enterdPassword}
      dispatch(LoginUser(login))
  }


  const submitHandler = (e) => {
    e.preventDefault();
    if (+enterdEmail || +enterdPassword > 0) {
      return (
        <Link to={'/home'}></Link>
      )
  }
}

  return (
    <div className="main-signup">
      <div className="signup-image">
        <div className="signup-text">
          <h1>Let's Register yourself to come one more step closer to </h1>
          <span className="span-text">your Dream Job</span>
        </div>
        <img src={signup} width="1533" height="600" alt="signin"/>
      </div>
      <div>
        <div className="form">
          <div style={{ display: "block", width: 700, padding: 30 }}>
            <h4>Log In Now</h4>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your your email address"
                  value={enterdEmail}
                  onChange = {(e) => {setEnteredEmail(e.target.value)}}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={enterdPassword} onChange= {(e) => {setEnteredPassword(e.target.value)}} />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2" onClick={(e)=> {loginHandler(e)}}>
                Login
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

export default Login;
