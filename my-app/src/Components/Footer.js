// UpdateBoard.js
import React from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

const Footer = () => {

  return (
    <div className="footer">
        <h1>Making speech free, as it should.</h1>
        
        <span>
          <p>Follow us on</p>
          <a href=""><BsTwitterX className="icon"/></a>
          <a href=""><BsFacebook className="icon"/></a>
          <a href=""><BsInstagram className="icon"/></a>
        </span>
    </div>
  );
};

export default Footer;
