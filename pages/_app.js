import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout';

import { ParticlesComponent } from '../components/ParticlesComponent';

import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <>
      <ParticlesComponent />
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence initial={false}>
          <ThemeProvider attribute="class">
            <Layout>
              <Component {...pageProps} key={url} />
            </Layout>
          </ThemeProvider>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
