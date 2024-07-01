import React from "react";

const SkillIcon = ({ id, title, imageUrl, experience, description, isOpen, onClick }) => {
  return (
    <div className={`skill-card ${isOpen ? "open" : ""}`} onClick={() => onClick(id)}>
      <div className="skill-icon">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="skill-content">
        <h3>{title}</h3>
      </div>
      {isOpen && (
        <div className="skill-details">
          <p><strong>Experience:</strong> {experience}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default SkillIcon;