import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export const Hero = ({ height, image, width }) => (
  <div className="flex flex-col items-center justify-center pt-24">
    <Image
      alt="hero-image"
      src={image}
      layout="fixed"
      height={height}
      width={width}
    />
  </div>
);

Hero.propTypes = {
  height: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
