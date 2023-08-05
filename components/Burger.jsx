import { bool, func } from 'prop-types';
import React from 'react';

export const Burger = ({ open, setOpen }) => {
  return (
    <button
      aria-label={open ? 'Close Menu' : 'Open Menu'}
      aria-expanded={open}
      className="fixed top-6 left-8 flex flex-col justify-between w-6 h-5 bg-transparent cursor-pointer p-0 z-20 focus:outline-none"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="w-full h-1 bg-black dark:bg-white transition-all" />
      <div className="w-full h-1 bg-black dark:bg-white transition-all" />
      <div className="w-full h-1 bg-black dark:bg-white transition-all" />
    </button>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
