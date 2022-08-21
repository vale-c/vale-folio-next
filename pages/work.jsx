import React from 'react';
import {
  ProjectsWrapper,
  ProjectCard,
  InnerCardText
} from '../components/ProjectCard';
import { Title } from '../components/elements/Titles';

const Work = ({ isWorkPage = true }) => {
  return (
    <div className="flex flex-col mb-12 px-8 sm:px-0">
      {isWorkPage && (
        <div className="py-16">
          <div className="fixed top-0 left-0 w-screen">
            <img
              className="object-cover h-56 w-full opacity-30"
              src="/images/coding-bg.jpg"
              alt="bg-cover"
            />
          </div>
        </div>
      )}
      <div className="py-8">
        <Title className="font-roboto mb-4 text-gray-800 dark:text-gray-50">
          Coding Projects
        </Title>
        <h3 className="font-lato mb-2 text-gray-700 dark:text-gray-50">
          Here are some of my coding projects.
        </h3>
        <span className="font-lato mb-4 text-gray-700 dark:text-gray-50">
          Check out my Github page for{' '}
          <a
            href="https://github.com/vale-c"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-400 dark:text-green-400 hover:underline"
          >
            more
          </a>
          .
        </span>
      </div>
      <ProjectsWrapper>
        <ProjectCard
          title="Vim Mentor App"
          link="https://vim-mentor-project.vercel.app/"
          background="linear-gradient(to right, #bce784 0%, #5dd39e 100%)"
        >
          <InnerCardText>
            An educational Web App to help other developers learn Vim which I
            made as a project for the Educational Technology class I attended at
            Georgia Tech.
          </InnerCardText>
        </ProjectCard>
        <ProjectCard
          title="Momentum Dashboard"
          link="https://github.com/vale-c/Momentum"
          background="linear-gradient(to right, #ffbe64 0%, #ffaa64 100%)"
        >
          <InnerCardText>
            A React Web App inspired by the popular Momentum Chrome Extension
            with a custom built-in todo list functionality and weather info.
          </InnerCardText>
        </ProjectCard>
        <ProjectCard
          title="City Stats"
          link="https://github.com/vale-c/CityStatsExplorer"
          background="linear-gradient(to right, #fface4 0%, #ab87ff 100%)"
        >
          <InnerCardText>
            City Stats is a React Web App that connects to the Teleport API to
            help you find out and compare some of the most useful parameters of
            all the major cities in the world.
          </InnerCardText>
        </ProjectCard>
        <ProjectCard
          title="Rock Paper Scissors"
          link="https://github.com/vale-c/rock-paper-scissors"
          background="linear-gradient(to right, #76a7f4 0%, #6071d7 100%)"
        >
          <InnerCardText>
            A simple Rock Paper Scissors game I made as a Frontend Mentor
            challenge.
          </InnerCardText>
        </ProjectCard>
      </ProjectsWrapper>
      <Title className="font-roboto text-gray-800 dark:text-gray-50 mt-8">
        Design Projects
      </Title>
      <h3 className="font-lato my-4 text-gray-800 dark:text-gray-50">
        Here are some of my Design projects.
      </h3>
      <ProjectsWrapper>
        <ProjectCard
          title="Classically"
          link="https://dribbble.com/shots/6024845-Classy-Classical-Music-App-Concept"
          background="linear-gradient(to right, #FF416C 0%, #FF4B2B 100%)"
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
            This is a paywall mockup for a VPN app allowing people to surf the
            Web in a more secure way.
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
  );
};

export default Work;
