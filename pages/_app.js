import React from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Head from 'next/head';
import { ParticlesComponent } from '../components/ParticlesComponent';
import { Cursor } from '../components/Cursor';
import { Footer } from '../components/Footer';
import { NavHeader } from '../components/NavHeader';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps, router }) {
  const url = `https://valentinacalabrese.com${router.route}`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Valentina Calabrese"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url,
          description:
            'The personal website for Valentina Calabrese, creative developer.',
          site_name: 'Valentina Calabrese | valentinacalabrese.com',
          images: []
        }}
        canonical={url}
      />
      <ThemeProvider attribute="class">
        <ParticlesComponent />
        <NavHeader />
        <Cursor />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} />
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
