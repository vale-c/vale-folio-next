import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { headerNavLinks } from '../data/headerNavLinks';
import { ToggleButton } from '../components/ToggleButton';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const variants = {
  open: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.1,
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

export const NavHeader = ({ navShow }) => {
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
    <header>
      <motion.nav
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className={
          isOpen
            ? 'fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark'
            : 'fixed container pointer-events-none left-1/2 transfrom -translate-x-1/2 md:px-2 px-4 mx-auto text-light  z-20 top-0 transition duration-1000 ease-in-out antialiased w-full py-4 bg-dark'
        }
      >
        <Head>
          <title>{page.toUpperCase() + ' | Vale Portfolio'}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta name="title" content="Vale - Portfolio" />
          <meta
            name="description"
            content="Valentina Calabrese, a Creative Software Engineer based in Italy. Discover more about me and my work here!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.valentinacalabrese.com/"
          />
          <meta property="og:title" content="Vale - Portfolio" />
          <meta property="og:site_name" content="Vale" />
          <meta
            property="og:description"
            content="Valentina Calabrese, a Creative Software Engineer based in Italy. Discover more about me and my work here!"
          />
          <meta property="og:image" content="/thumbnail.png" />
          <meta
            name="keywords"
            content="PortFolio, about me, about vale,valentina,  valentinacalabrese.com, valentina calabrese"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.valentinacalabrese.com/"
          />
          <meta name="twitter:site" content="CherriePie4897" />
          <meta name="twitter:creator" content="CherriePie4897" />
          <meta property="twitter:title" content="Vale's - Portfolio" />
          <meta
            property="twitter:description"
            content="Valentina Calabrese, a Creative Software Engineer based in Italy. Discover more about me and my work here!"
          />
          <meta
            property="twitter:image"
            content="https://www.techakhil.me/thumbnail.png"
          />
        </Head>
        <ul className="md:flex pointer-events-auto hidden items-center space-x-4 text-xs antialiased font-medium tracking-widest">
          <div className="text-4xl font-extrabold drop-shadow-xl shadow-indigo-500/50">
            <span className="font-roboto bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400">
              <Link href="/" aria-label="Vale's Next.js Portfolio">
                <a>Vale</a>
              </Link>
            </span>
            <span className="text-4xl hover:animate-ping">✨</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto'
            }}
          >
            {headerNavLinks.map((link) => (
              <li
                key={link.title}
                className="text-gray-700 dark:text-gray-100 text-xl font-bold hover:underline underline-offset-4 px-4 py-2"
                style={{ textShadow: 'white 0px 0px 10px' }}
              >
                <Link href={link.slug}>{link.title}</Link>
              </li>
            ))}
            <div className="ml-4 hidden sm:block">
              <ToggleButton />
            </div>
          </div>
        </ul>
        <button
          className="text-light pointer-events-auto md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          <div className=" block w-10 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2 ">
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
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              animate="open"
              initial="closed"
              exit="closed"
              variants={variants}
              className="bg-white dark:bg-gray-800 flex pointer-events-auto rounded-sm flex-col md:hidden h-scren space-y-8 items-center justify-center text-xl tracking-widest"
            >
              <motion.li
                onClick={() => {
                  setisOpen(!isOpen);
                }}
                variants={childVariants}
              >
                {headerNavLinks.map((link) => (
                  <li
                    key={link.title}
                    className="hover:underline underline-offset-4 px-12 py-4"
                  >
                    <Link
                      href={link.slug}
                      className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </motion.li>
              <motion.div
                onClick={() => {
                  setisOpen(!isOpen);
                }}
                variants={childVariants}
              >
                {/* <SocialTray /> */}
              </motion.div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
