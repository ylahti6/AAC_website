// Navigator.js
import React, { useEffect, useState } from "react";

const Navigator = () => {
  const [navHeight, setNavHeight] = useState("80px");

  useEffect (() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(100 - scrollY, 70);
      setNavHeight(`${newHeight}px`);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <div className="nav" style={{height: navHeight}}>
      <div className="links">
        <a href="#" className="logo">Oratio</a>
        <span>
          <a href="#">Learn more</a>
          <a href="#">Download</a>
          <a href="#" className="contact">Contact Us</a>
        </span>
      </div>
    </div>
  );
}

export default Navigator;
