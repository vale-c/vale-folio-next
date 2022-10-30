import React, { useState, useEffect, useRef } from 'react';
import { Loader } from './Loader';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

export const Layout = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        controls.start('enter');
      }, 500);
    } else {
      controls.start('hidden');
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [isLoading, controls]);

  const containerRef = useRef(null);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <div data-scroll-container ref={containerRef}>
        {props.children}
      </div>
    </motion.main>
  );
};
