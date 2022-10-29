import React, { useState } from 'react';
import Blog from './blog';
import { getDatabase } from '../lib/notion';
import { Hero } from '../components/Hero';
import Container from '../components/Container';
import Work from './work';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const visiblePosts = 4;
  const [showMore, setShowMore] = useState(visiblePosts);

  const handleLoadMore = () => {
    setShowMore(showMore + visiblePosts);
  };

  return (
    <Container>
      <Hero image="/images/vale-wave.png" height="250" width="250" />
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto mt-8 mb-16 md:px-0">
        <h1 className="text-3xl font-bold leading-tight text-center text-gray-900 dark:text-gray-100 md:text-5xl">
          I'm <span className="text-indigo-400 dark:text-green-400">Vale</span>
        </h1>
        <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-400">
          A <span className="hover:animate-bounce">creative</span> Software
          Engineer who loves transforming
          <br />
          <span className="hover:animate-bounce">ideas 💡</span>
          into
          <span className="hover:animate-pulse"> great products 🚀</span>
        </p>
      </div>
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
