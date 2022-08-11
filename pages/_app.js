import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React from 'react';

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter initial={false}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} key={url} />
          </Layout>
        </ThemeProvider>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
