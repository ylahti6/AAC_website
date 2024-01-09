import React from "react";
import Reports from "../Pages/Reports";

const UpdateBoard = () => {
  const sections = [
    {
      title: "Dev news",
      version: "v0.1",
      name: "Cross Platform",
      content: "Implementing cross platform for Oratio.",
      link: 'www.google.com',
    },
    {
      version: "v0.2 *Coming soon!🚀 ",
      name: "Language learning",
      content: "Customizable Phrasing, Gentle Transitions, and User-Friendly Enhancements! Tailor your child's language journey seamlessly. 🌐👶",
      link: '...',
    },
  ];

  return (
    <div className="updateBoard">
      {sections.map((section, index) => (
        <div key={index} className="updateSection">
          <p className="title">{section.title}</p>
          
          <span>
            <p className="version">{section.version}</p>
            <p className="update-name">{section.name}</p>
            <p className="test">{section.content}</p>
            <a href={section.link} target="_blank" rel="noopener">read more...</a>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UpdateBoard;
