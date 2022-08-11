import React, { useState } from 'react';
import Blog from './blog';
import { getDatabase } from '../lib/notion';
import { Hero } from '../components/Hero';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const visiblePosts = 4;
  const [showMore, setShowMore] = useState(visiblePosts);

  const handleLoadMore = () => {
    setShowMore(showMore + visiblePosts);
  };

  return (
    <>
      <Hero />
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
    </>
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
