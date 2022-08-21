import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Loader from '../components/Loader';
import { Hero } from '../components/Hero';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();
  const variants = {
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
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        controls.start('enter');
      }, 1000);
    } else {
      controls.start('hidden');
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, [isLoading, controls]);

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isLoading ? <Loader /> : null}
      </AnimatePresence>
      <motion.section
        variants={variants}
        initial="hidden"
        animate={controls}
        exit="exit"
        data-scroll-section
        className="w-full h-screen grid place-content-center"
      >
        <div className="pb-8">
          <Hero image="/images/vale-focus-mode.png" height="250" width="250" />
        </div>
        <div className="inline-flex flex-col items-center md:items-start space-y-6 px-8 text-lg">
          <div className="inline-flex space-x-2 items-center">
            <div className="w-16 hidden md:flex h-0.5 bg-gray-700 dark:bg-white"></div>
            <p className="text-sm font-medium text-gray-700 dark:text-white tracking-widest leading-snug uppercase">
              Welcome to my <span className="line-through">nerd</span> dev
              portfolio 🤓
            </p>
          </div>
          <div className="inline-flex items-center md:items-start flex-col text-4xl md:text-7xl font-bold tracking-widest leading-10 uppercase">
            <span className="font-roboto text-stroke stroke-gray-500 dark:stroke-white">
              Vale
            </span>
            <div className="font-roboto text-indigo-400 dark:text-green-300 text-2xl md:text-7xl">
              Creative Engineer
            </div>
          </div>
          <p className="mb-3 font-lato max-w-3xl text-center md:text-left">
            My name is Valentina and I am a Software Engineer with a knack for
            Design Systems & a special interest in{' '}
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
            <br /> I really enjoy thinking about <i>Usability</i>, and love to
            make great Designs come to life through <code>code</code>.
          </p>
          <p className="mb-3 font-lato max-w-3xl text-center md:text-left">
            I am currently pursuing a MSc in Computer Science at Georgia Tech (
            <a
              className="text-indigo-400 dark:text-green-400 font-bold hover:underline"
              href="https://omscs.gatech.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMSCS
            </a>{' '}
            program) with a specialization in Interactive Intelligence.
          </p>
          <p className="font-lato max-w-3xl text-center md:text-left">
            In my spare time I enjoy playing the drums 🥁 and the guitar 🎸,
            reading books 📚 about personal finance & self-improvement, and
            expanding my knowledge about cryptocurrencies 🤑.{' '}
          </p>
        </div>
      </motion.section>
      <section
        data-scroll-section
        className="font-roboto py-12 flex items-center justify-center md:justify-end text-4xl font-lg tracking-widest leading-tight text-light uppercase antialiased"
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
          <div className="mt-4 font-lato w-64 text-sm">
            The inextinguishable spark ✨ igniting my thirst for knowledge and
            the desire to <i>always</i> keep improving are some of my strongest
            motivation catalysts.
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
          <div className="mt-4 font-lato w-64 text-sm">
            <b>Creating</b> things instead of merely being a passive consumer is
            one of my most powerful mantras 💥, and something I always remind
            myself about to foster my intrinsic motivation.
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
          <div className="mt-4 font-lato w-64 text-sm">
            Connecting with other people in the dev community to collectively
            share knowledge is one of the things that inspire me the most 🤓.
            {/* There are so many great devs out there who have helped me grow and learn from the very
            beginning of my coding journey, and I want to be able to do the same
            and inspire other aspiring devs too. */}
          </div>
        </div>
      </section>
      <section
        data-scroll-section
        className="flex flex-col items-center justify-evenly h-screen"
      >
        <div className="font-roboto uppercase text-5xl sm:text-9xl font-bold text-center">
          <span className="text-stroke">Lets</span>
          <Link href="/contact">
            <a className="fx-underline text-indigo-400 dark:text-green-400">
              Talk
            </a>
          </Link>
        </div>
        {/* <div className="md:p-12 md:w-1/2  transform md:scale-150">
          <SocialTray />
        </div> */}
      </section>
    </>
  );
};

export default AboutPage;
