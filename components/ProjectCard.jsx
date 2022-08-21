import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export const InnerCardText = styled.p`
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ProjectCard = ({ title, link, children, background }) => (
  <a
    className="w-full shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 hover:translate-y-5"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    background={background}
    style={{
      background,
      border: background,
      transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }}
  >
    <div
      className="opacity-85 text-sm md:text-base"
      style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
    >
      {children}
    </div>
    <div
      className="uppercase text-white text-sm md:text-3xl xl:text-4xl tracking-wide pt-8"
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
  title: PropTypes.string
};
