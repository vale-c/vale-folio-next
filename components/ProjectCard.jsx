import React from 'react';
import PropTypes from 'prop-types';

export const ProjectsWrapper = ({ children }) => (
  <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
    {children}
  </div>
);

ProjectsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const InnerCardText = ({ children }) => (
  <p className="font-telex text-white text-shadow-md">{children}</p>
);

InnerCardText.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ProjectCard = ({ title, link, children, background }) => (
  <a
    className="w-full shadow-lg relative no-underline rounded-lg p-8 md:py-24 hover:translate-y-5"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    background={background}
    style={{
      background,
      border: background,
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }}
  >
    <div
      className="opacity-85 text-sm md:text-base text-shadow-md"
      style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
    >
      {children}
    </div>
    <div
      className="uppercase font-roboto text-white text-sm md:text-3xl xl:text-4xl tracking-wide pt-8 text-shadow-md"
      style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
    >
      {title}
    </div>
  </a>
);

ProjectCard.propTypes = {
  background: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
};
