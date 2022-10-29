import React, { useRef } from 'react';
import { NavHeader } from './NavHeader';
import { Cursor } from './Cursor';
import { LayoutGroup } from 'framer-motion';
import { Footer } from './Footer';
import { Loader } from './Loader';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

const Layout = ({ isLoading, ...props }) => {
  const containerRef = useRef(null);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <LayoutGroup type="crossfade">
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <div data-scroll-container className="w-screen" ref={containerRef}>
          <NavHeader />
          {props.children}
        </div>
        <Cursor />
        <Footer />
      </motion.main>
    </LayoutGroup>
  );
};

export default Layout;
