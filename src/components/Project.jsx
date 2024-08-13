import React from 'react';

function Project({ title, description, imageUrl, link }) {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="img-fluid" />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default Project;
