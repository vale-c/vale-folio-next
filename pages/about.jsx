import React from 'react';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';

export const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeInOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const AboutPage = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="w-full h-screen grid place-content-center lg:mt-12 mt-52">
          <div className="py-8">
            <Hero
              image="/images/vale-focus-mode.png"
              height="250"
              width="250"
            />
          </div>
          <div className="inline-flex flex-col items-center md:items-start space-y-6 px-8 text-lg">
            <div className="inline-flex space-x-2 items-center">
              <div className="w-16 hidden md:flex h-0.5 bg-gray-700 dark:bg-white"></div>
              <p className="lg:text-sm font-medium text-gray-700 dark:text-white tracking-widest leading-snug uppercase text-center">
                Welcome to my <span className="line-through">nerd</span> dev
                portfolio 🤓
              </p>
            </div>
            <div className="inline-flex items-center md:items-start flex-col text-4xl md:text-7xl font-bold tracking-widest leading-10 uppercase">
              <span className="font-roboto text-stroke stroke-gray-500 dark:stroke-white">
                Vale
              </span>
              <div className="font-roboto text-indigo-400 dark:text-green-300 text-2xl md:text-7xl text-center">
                Creative Engineer
              </div>
            </div>
            <p className="mb-3 font-telex max-w-3xl text-center md:text-left">
              My name is Valentina and I am a <strong>Front-end </strong>
              Software Engineer with a knack for Design Systems & an interest in{' '}
              <a
                className="font-bold hover:underline"
                href="https://www.interaction-design.org/literature/topics/user-centered-design#:~:text=User%2Dcentered%20design%20(UCD),and%20accessible%20products%20for%20them."
              >
                UCD{' '}
              </a>
              &{' '}
              <a
                className="font-bold hover:underline"
                href="https://developer.mozilla.org/it/docs/Web/Accessibility"
              >
                {' '}
                a11y
              </a>{' '}
              best-practices.
              <br />I truly enjoy thinking about <i>Usability</i>, and love to
              make great Designs come to life through <code>code</code>.
            </p>
            <p className="mb-3 font-telex max-w-3xl text-center md:text-left">
              I have a BSc in Computer Science from the{' '}
              <a
                className="text-indigo-400 dark:text-green-400 font-bold hover:underline"
                href="https://corsi.unipr.it/en/cdl-info"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Parma
              </a>{' '}
              and I am also currently pursuing a MSc in Computer Science at
              Georgia Tech (
              <a
                className="text-indigo-400 dark:text-green-400 font-bold hover:underline"
                href="https://omscs.gatech.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OMSCS{' '}
              </a>
              program) with a specialization in{' '}
              <a
                className="text-indigo-400 dark:text-green-400 font-bold hover:underline"
                href="https://omscs.gatech.edu/specialization-human-computer-interaction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Human-Computer Interaction
              </a>
              .
            </p>
            <p className="font-telex max-w-3xl text-center md:text-left">
              I love experimenting with new technologies and I am always looking
              for new ways to improve my skills and learn new things.
              <br />
            </p>
            <p className="font-telex max-w-3xl text-center md:text-left">
              In my spare time I enjoy playing the drums 🥁 and the guitar 🎸,
              skateboarding 🛹, reading books 📚 about personal finance &
              self-improvement ✨, and playing tennis 🎾.{' '}
            </p>
          </div>
        </div>
        <section
          data-scroll-section
          className="font-roboto md:pt-32 md:pb-12 md:pr-8 mt-48 flex items-center justify-center md:justify-end text-4xl font-lg tracking-widest leading-tight text-light uppercase antialiased"
        >
          what drives me
        </section>
        <section
          data-scroll-section
          className="w-full  text-light flex flex-col space-y-12 lg:flex-row lg:space-x-24 items-center justify-center"
        >
          <div>
            <div className="drive_card relative w-72 h-96 bg-gray-700">
              <div
                data-scroll
                data-scroll-speed="1.6"
                className="absolute -left-8 top-8 flex flex-col uppercase"
              >
                <div
                  className="text-indigo-400 dark:text-green-400 text-xl font-bold text-stroke-sm tracking-widest"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  desire to
                </div>
                <div
                  className="text-indigo-400 dark:text-green-400 text-4xl font-bold tracking-wider"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  learn
                </div>
              </div>
              <img
                className="object-cover  w-full h-full object-center"
                src="/images/book-cinemagraph.gif"
                alt="book-cinemagraph"
                draggable={false}
              />
            </div>
            <div className="mt-4 font-telex w-64 text-sm">
              The inextinguishable spark ✨ igniting my thirst for knowledge and
              the desire to <i>always</i> keep improving are some of my
              strongest motivation catalysts.
            </div>
          </div>
          <div>
            <div className="drive_card relative w-72 h-96 bg-gray-700">
              <div
                data-scroll
                data-scroll-speed="1.6"
                className="absolute -left-8 top-8 flex flex-col uppercase"
              >
                <div
                  className="text-indigo-400 dark:text-green-400 text-xl font-bold text-stroke-sm tracking-widest"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  desire to
                </div>
                <div
                  className="text-indigo-400  dark:text-green-400 text-4xl font-bold tracking-wider"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  Create
                </div>
              </div>
              <img
                className="object-cover rounded-lg w-full h-full object-center"
                src="/images/create.gif"
                alt="create-vaporwave-gif"
                draggable={false}
              />
            </div>
            <div className="mt-4 font-telex w-64 text-sm">
              <b>Creating</b> things instead of merely being a passive consumer
              is one of my most powerful mantras 💥, and something I always
              remind myself about to foster my intrinsic motivation.
            </div>
          </div>
          <div>
            <div className="drive_card relative w-72 h-96 bg-gray-700">
              <div
                data-scroll
                data-scroll-speed="1.6"
                className="absolute -left-8 top-8 flex flex-col uppercase"
              >
                <div
                  className="text-indigo-400 dark:text-green-400 text-xl font-bold text-stroke-sm tracking-widest"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  desire to
                </div>
                <div
                  className="text-indigo-400 dark:text-green-400 text-4xl font-bold tracking-wider"
                  style={{ textShadow: 'white 0px 0px 10px' }}
                >
                  connect
                </div>
              </div>
              <img
                className="object-cover rounded-lg w-full h-full object-center"
                src="/images/nyan-cat-kawaii.gif"
                alt="nyan-cat-kawaii-gif"
                draggable={false}
              />
            </div>
            <div className="mt-4 font-telex w-64 text-sm">
              Connecting with other people in the dev community to collectively
              share knowledge is one of the things that inspire me the most 🤓.
            </div>
          </div>
        </section>
        <section
          data-scroll-section
          className="flex flex-col items-center justify-evenly h-screen"
        >
          <div className="font-roboto uppercase text-7xl sm:text-9xl font-bold text-center">
            <span className="text-stroke">Lets</span>
            <Link
              className="fx-underline text-indigo-400 dark:text-green-400"
              href="/contact"
            >
              Talk
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
