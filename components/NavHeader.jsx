import React, { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

import { headerNavLinks } from '../data/headerNavLinks';
import { Burger } from './Burger';
import { ToggleButton } from '../components/ToggleButton';

import Link from 'next/link';
import Head from 'next/head';

import { hidden } from '../styles/utils';

export const NavHeader = () => {
  const [page] = useState('home');
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{page.toUpperCase() + ' | Vale Portfolio'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="Vale - Portfolio" />
        <meta
          name="description"
          content="Valentina Calabrese, a Creative Software Engineer based in Italy. Discover more about me and my work here!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.valentinacalabrese.com/" />
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
          content="https://www.valentinacalabrese.com/thumbnail.png"
        />
      </Head>
      <ul
        hidden={hidden}
        className="sm:flex pointer-events-auto items-center antialiased font-medium text-xs tracking-widest z-10"
      >
        <header
          className="top-0 w-screen fixed flex flex-row justify-between items-center tracking-widest
          h-16 md:h-20 px-12
        bg-white dark:bg-gray-800 text-black dark:text-white z-50"
        >
          <Link className="flex items-center justify-center" href="/">
            <span
              alt="sparkle-emoji"
              className="text-2xl lg:text-4xl font-bold mr-2 hover:animate-ping"
            >
              ✨
            </span>
          </Link>
          <LayoutGroup>
            <div className="flex align-center justify-center ml-auto">
              {headerNavLinks
                .filter((link) => link.title !== 'Home')
                .map((link) => (
                  <li
                    key={link.title}
                    className="text-gray-700 dark:text-gray-100 text-sm lg:text-xl font-bold hover:underline underline-offset-4 px-4 py-2"
                  >
                    <Link href={link.slug}>{link.title}</Link>
                  </li>
                ))}
            </div>
            <div className="ml-4 sm:block">
              <ToggleButton />
            </div>
          </LayoutGroup>
        </header>
      </ul>
      <div className="sm:hidden relative z-10">
        <div className="flex flex-col items-center justify-center mt-4 ml-2 text-center">
          <Burger open={open} setOpen={setOpen} />
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <ul className="py-6 mt-4">
                {headerNavLinks.map((link) => (
                  <li
                    key={link.title}
                    className="text-gray-700 dark:text-gray-100 text-md font-bold p-4 hover:underline underline-offset-4"
                  >
                    <Link href={link.slug}>{link.title}</Link>
                  </li>
                ))}
                <div className="mt-3 ml-8 sm:block">
                  <ToggleButton />
                </div>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};
