import React from 'react';
import { PiGithubLogoLight } from "react-icons/pi";

const Card = ({ title, content, keywords, imageSrc }) => {
  return (
    <div className="project-card">
      
        <div className="project-header">
        {imageSrc && <img src={imageSrc} className='project-image' alt={`${title} header`} />}
      </div>
        <span>
          <h5>{title}</h5>
        
      {/* Keywords function */}
      <p className='project-keywords'>
          {keywords && keywords.map((keyword, index) => (
            <span key={index} className='keyword'>{keyword}</span>
          ))}
        </p>
        </span>
    </div>
  );
};

export default Card;
