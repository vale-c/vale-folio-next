import React, { useState } from 'react';
import Blog from './blog';

import { getDatabase } from '../lib/notion';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  const visiblePosts = 3;
  const [showMore, setShowMore] = useState(visiblePosts);

  const handleLoadMore = () => {
    setShowMore(showMore + visiblePosts);
  };

  return (
    <>
      <Blog posts={posts?.slice(0, showMore)} />
      {visiblePosts < posts?.length && (
        <div className="flex justify-center">
          <button
            className="bg-indigo-100 text-indigo-800 font-semibold py-2 px-4 my-8 rounded"
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
