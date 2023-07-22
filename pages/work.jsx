import React from 'react';
import {
  ProjectsWrapper,
  ProjectCard,
  InnerCardText
} from '../components/ProjectCard';
import Container from '../components/Container';
import styled from 'styled-components';
import { screens, textSizes } from '../tailwind';

const Title = styled.h1`
  font-size: ${textSizes['4xl']};
  font-weight: 600;
  line-height: 56px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: ${screens.lg}px) {
    font-size: ${textSizes['2xl']};
    line-height: 42px;
  }
  @media (max-width: ${screens.md}px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: ${screens.sm}px) {
    font-size: ${textSizes['xl']};
    line-height: 32px;
  }
`;

const Work = ({ isWorkPage = true }) => {
  return (
    <Container>
      <div className="sm:py-8 flex flex-col pt-16">
        {isWorkPage && (
          <div className="sm:px-0 py-8">
            <div className="fixed top-0 left-0 w-screen">
              <img
                className="object-cover h-96 w-full opacity-30"
                src="/images/coding-bg.jpg"
                alt="bg-cover"
              />
            </div>
          </div>
        )}
        <div className="relative mb-8">
          <Title className="font-roboto mb-4 text-gray-800 dark:text-gray-50">
            Coding Projects
          </Title>
          <h3 className="font-telex mb-4 text-gray-700 dark:text-gray-50">
            Here are <em>some</em> of my coding projects.
          </h3>
          <span className="font-lato mb-4 text-gray-700 dark:text-gray-50">
            Check out my{' '}
            <a
              href="https://github.com/vale-c"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-indigo-400 dark:text-green-400 hover:underline"
            >
              GitHub page
            </a>{' '}
            for more.
          </span>
        </div>
        <ProjectsWrapper>
          <ProjectCard
            title="Vim Mentor App"
            link="https://vim-mentor-project.vercel.app/"
            background="linear-gradient(to right, #007f5f 0%, #2b9348 100%)"
          >
            <InnerCardText>
              An educational Web App to help other developers learn Vim which I
              made as a project for the Educational Technology class I attended
              at Georgia Tech.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Momentum Dashboard"
            link="https://momentum-dash.vercel.app/"
            background="linear-gradient(to right, #41bdea 0%, #2759f0 100%)"
          >
            <InnerCardText>
              A React Web App inspired by the popular Momentum Chrome Extension
              with a custom built-in todo list functionality and weather info.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Space X Website Clone"
            link="https://space-x-clone-seven.vercel.app/"
            background="linear-gradient(to right, #2c3e50 0%, #4b6cb7 100%)"
          >
            <InnerCardText>
              This is a clone of the Space X website built with Vite.js, TypeScript, and Tailwind CSS.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Three.js Sphere"
            link="https://three-js-sphere-app.vercel.app/"
            background="linear-gradient(to right, #fface4 0%, #ab87ff 100%)"
          >
            <InnerCardText>
              A Three.js project that renders a sphere with a custom texture and
              lighting.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="YouTube Focus"
            link="https://github.com/vale-c/youtube_focus"
            background="linear-gradient(to right, #FF416C 0%, #FF4B2B 100%)"
          >
            <InnerCardText>
              A Chrome Extension to blur out YouTube Video Thumbnails (&
              comments) in order to enhance focus while minimizing distractions
              and context-switching.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="City Stats"
            link="https://citystats.netlify.com/"
            background="linear-gradient(to right, #e0c3fc 0%, #8ec5fc 100%)"
          >
            <InnerCardText>
              City Stats is a React Web App that connects to the Teleport API to
              help you find out and compare some of the most useful parameters
              of all the major cities in the world.
            </InnerCardText>
          </ProjectCard>
          <ProjectCard
            title="Job Listings"
            link="https://job-listing-project.vercel.app/"
            background="linear-gradient(to right, #45cdb9 0%, #7fcfc5 100%)"
          >
            <InnerCardText>
              This is a landing page for a job listing portal. It was built as a
              challenge for the Frontend Mentor community.
            </InnerCardText>
          </ProjectCard>    
        </ProjectsWrapper>
        <Title className="font-roboto text-gray-800 dark:text-gray-50 mt-8 z-30">
          Design Projects
        </Title>
        <h3 className="font-telex mb-8 text-gray-700 dark:text-gray-50 z-30">
          Here are some of my Design projects.
        </h3>
        <div className="mb-4">
          <ProjectsWrapper>
            <ProjectCard
              title="Classically"
              link="https://dribbble.com/shots/6024845-Classy-Classical-Music-App-Concept"
              background="linear-gradient(to right, #76a7f4 0%, #6071d7 100%)"
            >
              <InnerCardText>
                This project is a concept for an educational app about classical
                music.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Winter Wonderland"
              link="https://dribbble.com/shots/14815633-Ski-Mobile-App-Concept"
              background="linear-gradient(to right, #4568DC 0%, #B06AB3 100%)"
            >
              <InnerCardText>A concept for a Ski Mobile App.</InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Safe-fi"
              link="https://dribbble.com/shots/4307518-Secured"
              background="linear-gradient(to right, #2c3e50 0%, #3498db 100%)"
            >
              <InnerCardText>
                This is a paywall mockup for a VPN app allowing people to surf
                the Web in a more secure way.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Fontsy"
              link="https://dribbble.com/shots/4307574-Fancy-Fonts"
              background="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            >
              <InnerCardText>
                A fancy paywall for a photo editing app specialized in adding
                gorgeous texts to your images.
              </InnerCardText>
            </ProjectCard>
          </ProjectsWrapper>
        </div>
      </div>
    </Container>
  );
};

export default Work;
