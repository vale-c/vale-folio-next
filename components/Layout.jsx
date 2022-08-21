import React, { useEffect, useState, useRef } from 'react';
import { NavHeader } from './NavHeader';
import Link from 'next/link';
import { Cursor } from './Cursor';
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll
} from 'react-locomotive-scroll';
import { useAnimation, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';

const Layout = (props) => {
  const containerRef = useRef(null);
  const { pathname } = useRouter();
  const { scroll } = useLocomotiveScroll();
  const path = pathname.split('?')[0];

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
    <AnimateSharedLayout type="crossfade">
      <LocomotiveScrollProvider
        options={{
          smooth: true
        }}
        watch={[path]}
        location={path}
        containerRef={containerRef}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        } // If you want to reset the scroll position to 0 for example
        onUpdate={() => console.log('Updated, but not on location change!')}
      >
        <div data-scroll-container className="w-screen" ref={containerRef}>
          <div className="Layout md:px-4 container mx-auto pt-4 bg-dark antialiased text-light w-screen h-full">
            <NavHeader />
            {props.children}
            {!isLoading && (
              <footer
                scroll={scroll}
                className="font-lato text-center text-gray-700 dark:text-gray-50 pin-b p-6 text-md lg:text-lg"
              >
                © {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}
                <Link href="/about">
                  <span className="font-bold hover:underline">Vale</span>
                </Link>
              </footer>
            )}
          </div>
        </div>
      </LocomotiveScrollProvider>
      <Cursor />
    </AnimateSharedLayout>
  );
};

export default Layout;
