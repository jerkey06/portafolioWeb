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
      className={`card ${isOpen ? "open" : ""} ${isDisabled ? "disabled" : ""}`}
      onClick={handleToggle}
    >
      <div className="background">
        <img src={imageUrl} alt={`${title} Preview`} />
      </div>
      <div className="content">
        <div className="card-header">
          <div className="card-type">{cardType}</div>
          <div className="latest-article">{articleStatus}</div>
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="blog-preview__bottom">
          <div className="blog-author">
            <img src={profileImageUrl} alt="Avatar" />
            <div className="blog-author__name">
              <div>{authorName}</div>
              <a
                rel="author"
                href={`mailto:${authorEmail}`}
                className="blog-author__alias"
              >
                @{authorAlias}
              </a>
            </div>
          </div>
          <a className="go-to-article-button" href={projectLink} title="View Project">
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
            <p>{description}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;