import React from "react";

const AboutBoard = () => {
  const sections = [
    {
      title: "Welcome to Oratio",
      oneText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      twoText: "We’re looking forward to creating a brighter future for you and your loved ones!",
      threeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      fourText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "link comes here",
    },
  ];

  return (
    <div className="aboutBoard">
      {sections.map((section, index) => (
        <div key={index} className="aboutSection">
          <h1>{section.title}</h1>
          <span>
            <p>{section.oneText}</p>
            <p>{section.twoText}</p>
            <p>{section.threeText}</p>
            <p>{section.fourText}</p>
            <p>{section.content}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default AboutBoard;
