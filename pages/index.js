import React, { useEffect, useState } from 'react';
import Blog from './blog';
import { getDatabase } from '../lib/notion';
import { Hero } from '../components/Hero';
import Container from '../components/Container';
import Work from './work';
import Loader from '../components/Loader';
import { useAnimation } from 'framer-motion';
import Link from 'next/link';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import particlesData from '../data/particlesData.json';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const visiblePosts = 4;
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(visiblePosts);
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

  const handleLoadMore = () => {
    setShowMore(showMore + visiblePosts);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesData}
      />
      <Hero image="/images/vale-wave.png" height="400" width="400" />
      <Work isWorkPage={false} />
      <Blog posts={posts?.slice(0, showMore)} />
      {visiblePosts < posts?.length && (
        <div className="flex justify-center">
          <button
            className="bg-indigo-100 text-indigo-800 dark:bg-green-100 dark:text-green-800 font-semibold py-2 px-4 my-8 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
      <footer
        scroll={scroll}
        className="font-lato text-center text-gray-700 dark:text-gray-50 pin-b p-6 text-md lg:text-lg"
      >
        © {new Date().getFullYear()}, Built with ☕️ & 💖 by{' '}
        <Link href="/about">
          <span className="font-bold hover:underline">Vale</span>
        </Link>
      </footer>
    </Container>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database
    },
    revalidate: 1
  };
};
