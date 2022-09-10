import React, { useRef } from 'react';
import { NavHeader } from './NavHeader';
import { Cursor } from './Cursor';
import { LayoutGroup } from 'framer-motion';
import Link from 'next/link';

const Layout = (props) => {
  const containerRef = useRef(null);
  return (
    <LayoutGroup type="crossfade">
      <div data-scroll-container className="w-screen" ref={containerRef}>
        <NavHeader />
        {props.children}
      </div>
      <Cursor />
      <footer className="font-lato text-center text-gray-700 dark:text-gray-50 pin-b p-6 text-md lg:text-lg">
        © {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}
        <Link href="/about">
          <span className="font-bold hover:underline">Vale</span>
        </Link>
      </footer>
    </LayoutGroup>
  );
};

export default Layout;
