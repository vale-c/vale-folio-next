import React from 'react';
import { Hero } from '../components/Hero';

const Contact = () => (
  <div className="flex flex-col items-center justify-center h-screen py-8 overflow-hidden">
    <div className="mb-8">
      <Hero image="/images/vale-email.png" height="300" width="300" />
    </div>
    <div
      className="px-24 opacity-85 text-sm md:text-base"
      style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
    >
      <div
        className="text-gray text-3xl lg:text-4xl my-8 tracking-wide relative"
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}
      >
        <a
          className="font-roboto w-full relative no-underline rounded-lg"
          href="mailto:frontendvale@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          background="linear-gradient(to right, #f6d365 0%, #fda085 100%)"
        >
          Get in touch 💌
        </a>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl relative inline-block">
        <span className="italic">
          Dont'be a <strike>stranger</strike>.
        </span>
        <div className="my-4">
          Say <a href="mailto:frontendvale@gmail.com">Hi</a>{' '}
          <span className="wave-emoji text-2xl">👋🏻</span> or follow me on:{' '}
        </div>
        <a
          className="font-telex font-bold hover:underline"
          href="https://dribbble.com/blueberrymuffin95"
          target="_blank"
        >
          Dribbble
        </a>{' '}
        🎨 ,{' '}
        <a
          className="font-telex font-bold hover:underline"
          href="https://www.instagram.com/frontendvale/"
          target="_blank"
        >
          Instagram
        </a>{' '}
        📸 ,{' '}
        <a
          className="font-telex font-bold hover:underline"
          href="https://www.github.com/vale-c/"
          target="_blank"
        >
          GitHub
        </a>{' '}
        💻 or{' '}
        <a
          className="font-telex font-bold hover:underline"
          href="https://www.twitter.com/CherriePie4897/"
          target="_blank"
        >
          Twitter
        </a>{' '}
        🐦
      </div>
    </div>
  </div>
);

export default Contact;
