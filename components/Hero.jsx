import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const Hero = ({ height, image, width }) => (
  <motion.div
    initial={{ opacity: 0.6 }}
    whileHover={{
      rotate: getRandomInt(0, 2) < 1 ? -5 : 5,
      scale: 1.1,
      transition: { type: 'spring', duration: 0.3, bounce: 0.25 }
    }}
    whileTap={{ scale: 0.9 }}
    whileInView={{ opacity: 1 }}
    className="flex flex-col items-center justify-center pt-4 md:pt-12"
  >
    <Image
      alt="hero-image"
      src={image}
      layout="fixed"
      height={height}
      width={width}
      priority
      quality={70}
    />
  </motion.div>
);

Hero.propTypes = {
  height: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
