import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigator = () => {
  const [navHeight, setNavHeight] = useState("80px");

  // Mobile menu
  const toggleMobileMenu = () => {
    var x = document.querySelector(".myLinks");
    x.classList.toggle("show");
    document.body.classList.toggle("menu-open")
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.max(100 - scrollY, 70);
      setNavHeight(`${newHeight}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="nav" style={{ height: navHeight }}>
      <div className="links">
        <a href="#" className="logo">Oratio</a>
        <span className="myLinks">
          <a href="#">Learn more</a>
          <a href="#">Download</a>
          <a href="#" className="contact">Contact Us</a>
        </span>

        <span className="mobile-menu">
          <RxHamburgerMenu className="icon" onClick={toggleMobileMenu} />
        </span>
      </div>
    </div>
  );
};

export default Navigator;
