import React from 'react';
import Image from 'next/image';
// framer motion
import { motion } from 'framer-motion';

export const Hero = () => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: -10 }}
    whiletap={{ scale: 0.95 }}
  >
    <div
      className="flex flex-col items-center justify-center py-12"
      style={{ cursor: '👋' }}
    >
      <Image
        alt="vale-vawe"
        src="/images/vale-wave.png"
        layout="fixed"
        height="350"
        width="350"
      />
    </div>
  </motion.div>
);
