import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialTray from './SocialTray';
import Head from 'next/head';
import { ToggleButton } from './ToggleButton';

const variants = {
  open: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: {
      // duration: 0.1,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren'
    }
  }
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    rotateZ: '0deg',
    transition: { stiffness: 1000 }
  },
  closed: {
    y: 50,
    opacity: 0,
    rotateZ: '5deg',
    transition: { stiffness: 200, duration: 0.1 }
  }
};

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [page, setPage] = useState('home');
  const router = useRouter();

  const defaultNav = {
    home: 'inActive',
    about: 'inActive',
    contact: 'inActive',
    work: 'inActive'
  };
  const [isActive, setActive] = useState(defaultNav);
  useEffect(() => {
    let Path = router.asPath.slice(1);
    Path = Path === '' ? 'home' : Path;
    setActive({ ...defaultNav, [Path]: 'Active' });
    setPage(Path);
  }, [router]);

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      exitBeforeEnter
      className={
        isOpen
          ? 'fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark'
          : 'fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4'
      }
    >
      <Head>
        <title>{page.toUpperCase() + ' |  Vale Portfolio'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <div className="flex justify-end">
        <ul className="md:flex pointer-events-auto	 hidden items-center space-x-20 text-xs antialiased font-medium tracking-widest">
          <li>
            <Link href="/">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.home}`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.work}`}
              >
                WORK
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.about}`}
              >
                ABOUT
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`h-8 flex flex-col justify-center fx-underline ${isActive.contact}`}
              >
                CONTACT
              </a>
            </Link>
          </li>
          <ToggleButton />
        </ul>
        <button
          className="text-light pointer-events-auto	 md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className="block w-10 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2 ">
            <span
              className={`block rounded-full absolute h-0.5 w-9 bg-current transform transition duration-1000 ease-in-out ${
                isOpen ? '-rotate-45' : '-translate-y-2.5'
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current   transform transition duration-1000 ease-in-out ${
                isOpen ? '-translate-x-10 opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block rounded-full absolute  h-0.5 w-9 bg-current transform  transition duration-1000 ease-in-out ${
                isOpen ? 'rotate-45' : 'translate-y-2.5'
              }`}
            ></span>
          </div>
        </button>
        {/* <Link href="/">
          <a className="pointer-events-auto">
            <motion.svg
              layoutId="loader"
              id="brand"
              width="129"
              height="21"
              viewBox="0 0 129 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0.5H128.5V20.5H0.5V0.5Z" fill="currentColor" />
            </motion.svg>
          </a>
        </Link> */}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            animate="open"
            initial="closed"
            exit="closed"
            variants={variants}
            className="flex pointer-events-auto	 flex-col md:hidden space-y-8 h-screen items-center justify-center text-xl tracking-widest"
          >
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                title="HOME"
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/"
              >
                HOME
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/about"
              >
                ABOUT
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/work"
              >
                WORK
              </Link>
            </motion.li>
            <motion.li
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <Link
                className="h-10 text-4xl font-bold flex flex-col justify-center fx-underline"
                href="/contact"
              >
                CONTACT
              </Link>
            </motion.li>
            <motion.div
              onClick={() => {
                setisOpen(!isOpen);
              }}
              variants={childVariants}
            >
              <SocialTray />
            </motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
