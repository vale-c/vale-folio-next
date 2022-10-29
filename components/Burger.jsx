import React from 'react';
import { bool, func } from 'prop-types';

import styled from 'styled-components';

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="w-8 h-1 dark:bg-white bg-black transition-all" />
      <div className="w-8 h-1 dark:bg-white bg-black transition-all" />
      <div className="w-8 h-1 dark:bg-white bg-black transition-all" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
