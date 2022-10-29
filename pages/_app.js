import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ParticlesComponent } from '../components/ParticlesComponent';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useAnimation } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

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
      <LayoutGroup type="crossfade">
        <AnimatePresence initial={false}>
          <ThemeProvider attribute="class">
            <Layout isLoading={isLoading}>
              <ParticlesComponent />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}

export default MyApp;
