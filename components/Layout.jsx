import React, { useRef } from 'react';
import { NavHeader } from './NavHeader';
import { Cursor } from './Cursor';
import { LayoutGroup } from 'framer-motion';
import { Footer } from './Footer';
import { Loader } from './Loader';

const Layout = ({ isLoading, ...props }) => {
  const containerRef = useRef(null);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <LayoutGroup type="crossfade">
      <div data-scroll-container className="w-screen" ref={containerRef}>
        <NavHeader />
        {props.children}
      </div>
      <Cursor />
      <Footer />
    </LayoutGroup>
  );
};

export default Layout;
