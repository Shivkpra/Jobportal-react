import React from "react";
import "./Footer.css";
import { BsSuitHeartFill, BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  const style = { color: "red" };
  const styl = { color: "#1440AE" };
  return (
    <div className="footer-main">
      <div className="contact">
        <h4>Contact Us</h4>
        <BsFacebook style={styl} size="3%" />
        <AiFillTwitterCircle style={styl} size="4%" />
        <AiFillInstagram style={styl} size="4%" />
        <AiFillLinkedin style={styl} size="4%" />
      </div>
      <div className="footer">
        <p className="para">
          Copyright © 2022 All rights reserved | This project is madae with{" "}
          <BsSuitHeartFill style={style} /> by React-team
        </p>
      </div>
    </div>
  );
}

export default Footer;
