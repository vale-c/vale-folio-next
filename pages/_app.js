import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ParticlesComponent } from '../components/ParticlesComponent';
import { AnimatePresence } from 'framer-motion';
import { useAnimation } from 'framer-motion';

function MyApp({ Component, pageProps }) {
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

  return (
    <ThemeProvider attribute="class">
      <Layout isLoading={isLoading}>
        <ParticlesComponent />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
