import React, { useState } from 'react';
import Blog from './blog';
import { getDatabase } from '../lib/notion';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
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
    <Layout>
      <Container>
        <Hero image="/images/vale-wave.png" height="250" width="250" />
        <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto mt-8 mb-16 md:px-0">
          <h1 className="font-roboto tracking-wide text-3xl font-bold leading-tight text-center text-gray-900 dark:text-gray-100 md:text-5xl hover:animate-bounce">
            I'm{' '}
            <span className="bg-clippath bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-500 ">
              Vale
            </span>
          </h1>
          <p className="font-telex mt-4 text-xl text-center text-gray-600 dark:text-gray-200">
            A <span className="hover:animate-ping">creative</span> Software
            Engineer 👩🏻‍💻 who loves transforming
            <br />
            <span className="hover:animate-pulse">ideas 💡</span> into great{' '}
            <span className="hover:animate-pulse">products 🚀</span>
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
    </Layout>
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
