import React, { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';

import { headerNavLinks } from '../data/headerNavLinks';
import { Burger } from './Burger';
import { ToggleButton } from '../components/ToggleButton';

import Link from 'next/link';

export const NavHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8">
      <nav>
        <ul className="pointer-events-auto items-center antialiased font-medium text-xs tracking-widest z-10 hidden xl:block sm:flex">
          <header
            className="top-0 w-screen fixed flex flex-row justify-between items-center tracking-widest
          h-16 md:h-20 px-12 bg-white dark:bg-gray-800 text-black dark:text-white z-40"
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
              <ul className="flex align-center justify-center ml-auto">
                {headerNavLinks
                  .filter((link) => link.title !== 'Home')
                  .map((link) => (
                    <li
                      key={link.title}
                      className="font-bold hover:before:scale-x-100 hover:before:origin-left text-sm lg:text-xl relative before:w-3/4 before:h-1 before:origin-center before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-300 dark:before:bg-green-300 before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-0 px-4 py-2"
                    >
                      <Link href={link.slug}>{link.title}</Link>
                    </li>
                  ))}
              </ul>
              <div className="ml-4 sm:block">
                <ToggleButton />
              </div>
            </LayoutGroup>
          </header>
        </ul>
      </nav>
      <nav className="relative z-10 bg-gray-50 dark:bg-gray-800 sm:hidden">
        <div className="text-center flex-col items-center justify-center">
          <div className="sm:my-6">
            <Burger open={open} setOpen={setOpen} />
          </div>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center"
              >
                <ul className="py-6 mt-4 text-grey-800 dark:text-slate-50">
                  {headerNavLinks.map((link) => (
                    <li
                      key={link.title}
                      className="font-mono font-semibold text-gray-700 dark:text-gray-100 hover:before:scale-x-100 hover:before:origin-left text-sm relative before:w-3/4 before:h-1 before:origin-center before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-300 dark:before:bg-green-300 before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:bottom-0 p-4"
                    >
                      <Link href={link.slug}>{link.title}</Link>
                    </li>
                  ))}
                  <div className="mt-3 ml-6 sm:block">
                    <ToggleButton />
                  </div>
                </ul>
              </motion.div>
              {/* close button */}
              <button
                aria-label="close"
                className="hover:rotate-6 font-bold absolute bottom-0 py-6 left-6"
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
