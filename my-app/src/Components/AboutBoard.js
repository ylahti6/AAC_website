import React from "react";

const AboutBoard = () => {
  const sections = [
    {
      title: "Welcome to Oratio",
      mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      text: "We’re looking forward to creating a brighter future for you and your loved ones!",
      link: "www.google.com",
    },
  ];

  return (
    <div className="aboutBoard">
      {sections.map((section, index) => (
        <div key={index} className="aboutSection">
          <h1>{section.title}</h1>
          <span>
            <p>{section.mainText}</p>
            <p>{section.text}</p>
            <p>{section.content}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutBoard;
