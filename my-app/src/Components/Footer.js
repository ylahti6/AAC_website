// UpdateBoard.js
import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {

  return (
    <div className="footer">
      <div className="header">
        <h1>Make speech free, as it should.</h1>
      </div>
      
      <div className="footer-middle-container">
        <span>
          <p>Speak to us</p>
          <p>+44 12345678910</p>
          <p>contact@oratio.com</p>
        </span>
        <span>
          <p>Speak to us</p>
          <p>+44 12345678910</p>
          <p>contact@oratio.com</p>
        </span>
      </div>

      <div className="footer-bottom-container">
        <span>
          <p>Oratio</p>
        </span>
        <span>
          <a href="">Twitter X</a>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
