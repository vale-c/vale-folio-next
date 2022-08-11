import React from 'react';
import Image from 'next/image';

export const Hero = () => (
  <div className="flex flex-col items-center justify-center pt-24">
    <Image
      alt="vale-vawe"
      src="/images/vale-wave.png"
      layout="fixed"
      height="400"
      width="400"
    />
  </div>
);
