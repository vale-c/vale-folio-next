import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Loader } from './Loader';
import { motion, useAnimation } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

export const Layout = ({ ...props }) => {
  const controls = useAnimation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) =>
      url !== router.pathname && controls.start('enter') && setLoading(true);
    const handleComplete = (url) =>
      url === router.pathname && controls.start('hidden') && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  const containerRef = useRef(null);

  return loading ? (
    <Loader />
  ) : (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', bounce: 0.25, duration: 0.3 }}
      className="flex flex-col items-center justify-center"
    >
      {props.children}
    </motion.div>
  );
};
