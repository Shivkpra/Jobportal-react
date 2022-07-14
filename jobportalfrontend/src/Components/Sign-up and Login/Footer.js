import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const style = { color: "#fff" };
  return (
    <div className="footer-main container-fluid px-5 py-3">
      <div className="row">
        <div className="col-lg-6">
          Copyright &copy; 2022 All rights reserved
        </div>
        <div className="col-lg-6">
          <div className="icons" style={{ textAlign: "right" }}>
            <a href="#" style={{ marginRight: "10px" }}>
              <BsFacebook
                className="icon-hover-color"
                size="4%"
                style={style}
              />
            </a>

            <a href="#" style={{ marginRight: "10px" }}>
              <AiFillTwitterCircle
                className="icon-hover-color"
                size="5%"
                style={style}
              />
            </a>

            <a href="#" style={{ marginRight: "10px" }}>
              <AiFillInstagram
                className="icon-hover-color"
                size="5%"
                style={style}
              />
            </a>

            <a href="#">
              <AiFillLinkedin
                className="icon-hover-color"
                size="5%"
                style={style}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
