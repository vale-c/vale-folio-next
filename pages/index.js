import React, { useEffect, useState } from 'react';
import Blog from './blog';
import { getDatabase } from '../lib/notion';
import { Hero } from '../components/Hero';
import Container from '../components/Container';
import Work from './work';
import Loader from '../components/Loader';
import { useAnimation } from 'framer-motion';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
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
