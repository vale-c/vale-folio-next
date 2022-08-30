import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ParticlesComponent } from '../components/ParticlesComponent';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence initial={false}>
          <ThemeProvider attribute="class">
            <Layout>
              <ParticlesComponent />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
