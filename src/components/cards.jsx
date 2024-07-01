import React, { useState } from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  authorName,
  authorEmail,
  authorAlias,
  profileImageUrl,
  cardType,
  articleStatus,
  projectLink,
  onCardToggle,
  isDisabled
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
      onCardToggle(!isOpen);
    }
  };

  return (
    <article
      className={`project-card ${isOpen ? "open" : ""} ${isDisabled ? "disabled" : ""}`}
      onClick={handleToggle}
    >
      <div className="project-card-content">
        <div className="project-card-header">
          <div className="project-card-type">{cardType}</div>
          <div className="project-card-status">{articleStatus}</div>
        </div>
        <h3 className="project-title">{title}</h3>
        <div className="project-image">
          <img src={imageUrl} alt={`${title} Preview`} />
        </div>
        <p className="project-description">{description}</p>
        <div className="project-card-footer">
          <div className="project-author">
            <img src={profileImageUrl} alt={`Avatar de ${authorName}`} className="author-avatar" />
            <div className="author-info">
              <div className="author-name">{authorName}</div>
              <a
                rel="author"
                href={`mailto:${authorEmail}`}
                className="author-alias"
              >
                @{authorAlias}
              </a>
            </div>
          </div>
          <a className="project-link" href={projectLink} title="Ver Proyecto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </a>
        </div>
        {isOpen && (
          <div className="project-details">
            <h4>Detalles del Proyecto</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;