import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ title, image, url }) => {
  return (
    <article className="project">
      <img src={image} alt={title} />
      <footer>
        <h2>{title}</h2>
        <a href={url} target="_blank" rel="noreferrer" className="site-link">
          <BiLinkExternal />
        </a>
      </footer>
    </article>
  );
};

export default Project;
