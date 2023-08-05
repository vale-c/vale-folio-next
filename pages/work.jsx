import React from 'react';
import {
  ProjectsWrapper,
  ProjectCard,
  InnerCardText
} from '../components/ProjectCard';
import Container from '../components/Container';
import { Ribbon } from '../components/Ribbon';
import Image from 'next/image';

const Title = ({ children }) => (
  <h1 className="my-8 font-roboto text-gray-800 dark:text-gray-50 text-4xl font-semibold leading-56 text-shadow-md md:text-3xl md:leading-42 sm:text-2xl sm:leading-32">
    {children}
  </h1>
);

const Work = ({ isWorkPage = true }) => {
  return (
    <>
      <section className="sm:py-12 flex flex-col pt-8">
        {isWorkPage && (
          <div className="sm:px-0 py-8">
            <div className="fixed top-0 left-0 w-screen">
              <Image
                className="object-cover h-96 w-full opacity-30"
                src="/images/coding-bg.jpg"
                alt="bg-cover"
                priority={true}
                width={1920}
                height={1080}
              />
            </div>
          </div>
        )}
        <Container>
          <div className="relative mb-8">
            <Title>Coding Projects</Title>
            <h2 className="font-telex mb-4 text-gray-700 dark:text-gray-50">
              Here are <p className="inline-block hover:underline">some</p> of
              my coding projects.
            </h2>
            <span className="font-lato mb-4 text-gray-700 dark:text-gray-50">
              Check out my{' '}
              <a
                href="https://github.com/vale-c"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-400 dark:text-green-400 hover:underline"
              >
                GitHub
              </a>{' '}
              for more.
            </span>
          </div>
          <ProjectsWrapper>
            <ProjectCard
              title="Vim Mentor App"
              link="https://vim-mentor-project.vercel.app/"
              background="linear-gradient(to right, #98e2c6 0%, #66c6ba 100%)"
            >
              <InnerCardText>
                An educational Web App to help other developers learn Vim which
                I made as a project for the Edu Tech class I attended as part of
                my MSc in CS at Georgia Tech.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Momentum Dashboard"
              link="https://momentum-dash.vercel.app/"
              background="linear-gradient(to right, #9cdaf0 0%, #748BDA 100%)"
            >
              <InnerCardText>
                A React App inspired by the popular Momentum Chrome Extension
                with a built-in todo list functionality and weather info.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Space X Website Clone"
              link="https://space-x-clone-seven.vercel.app/"
              background="linear-gradient(to right, #6c7b8b 0%, #8796C0 100%)"
            >
              <InnerCardText>
                A replica of the Space X website built with Vite.js, TypeScript,
                and Tailwind CSS.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Three.js Sphere"
              link="https://three-js-sphere-app.vercel.app/"
              background="linear-gradient(to right, #84a9d0 0%, #607893 100%)"
            >
              <InnerCardText>
                A Three.js project that renders a sphere with a custom texture
                and lighting.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="City Stats"
              link="https://citystats.netlify.com/"
              background="linear-gradient(to right, #d3c7fd 0%, #8db9fc 100%)"
            >
              <InnerCardText>
                City Stats is a React Web App that connects to the Teleport API
                to help you find out and compare some of the most useful
                parameters of all the major cities in the world.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="YouTube Focus"
              link="https://github.com/vale-c/youtube_focus"
              background="linear-gradient(to right, #FF86A8 0%, #FF7558 100%)"
            >
              <InnerCardText>
                A Chrome Extension to blur out YouTube Video Thumbnails (&
                comments) in order to enhance focus while minimizing
                distractions and context-switching.
              </InnerCardText>
            </ProjectCard>
          </ProjectsWrapper>
          <Title>Design Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Classically"
              link="https://dribbble.com/shots/6024845-Classy-Classical-Music-App-Concept"
              background="linear-gradient(to right, #a1bdf7 0%, #8d98e1 100%)"
            >
              <InnerCardText>
                This project is a concept for an educational app about classical
                music.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Winter Wonderland"
              link="https://dribbble.com/shots/14815633-Ski-Mobile-App-Concept"
              background="linear-gradient(to right, #7a87cf 0%, #b889c0 100%)"
            >
              <InnerCardText>A concept for a Ski Mobile App.</InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Safe-fi"
              link="https://dribbble.com/shots/4307518-Secured"
              background="linear-gradient(to right, #6d7f8d 0%, #6ca2e8 100%)"
            >
              <InnerCardText>
                This is a paywall mockup for a VPN app allowing people to surf
                the Web in a more secure way.
              </InnerCardText>
            </ProjectCard>
            <ProjectCard
              title="Fontsy"
              link="https://dribbble.com/shots/4307574-Fancy-Fonts"
              background="linear-gradient(to right, #e2baff 0%, #8cffeb 100%)"
            >
              <InnerCardText>
                A fancy paywall for a photo editing app specialized in adding
                gorgeous texts to your images.
              </InnerCardText>
            </ProjectCard>
          </ProjectsWrapper>
        </Container>
      </section>
    </>
  );
};

export default Work;
