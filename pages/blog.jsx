import { Fragment } from 'react';
import { getDatabase } from '../lib/notion';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import Container from '../components/Container';

export const databaseId = process.env.NOTION_DATABASE_ID;

export function Blog({ posts }) {
  return (
    <Layout>
      <Container>
        <h2 className="text-2xl font-roboto mt-24 mb-10 text-gray-800 dark:text-gray-50">
          Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => {
            const titles =
              post?.properties?.Title?.title[0]?.plain_text ?? null;
            const descriptions =
              post?.properties?.Description?.rich_text[0]?.plain_text ?? null;
            const covers = post?.properties?.Cover?.files ?? null;
            const tags = post?.properties?.Tags?.multi_select ?? [];
            const dates = post?.properties?.Date?.date?.start ?? null;
            const postUrl = post?.id ?? null;
            return (
              <Fragment key={postUrl}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-b-lg"
                >
                  <div className="mb-4 pb-6">
                    <a href={`/${postUrl}`} className="relative">
                      <img
                        alt="blog-post-cover"
                        className="h-60 w-full rounded-t-lg object-cover"
                        src={
                          covers?.[0]?.file?.url || covers?.[0]?.external?.url
                        }
                      />
                      <div className="p-4">
                        <div className="text-sm font-light mb-1 text-gray-400">
                          {dates}
                        </div>
                        <div className="text-lg font-semibold mb-1 text-gray-700 dark:text-gray-50">
                          {titles}
                        </div>
                        <div className="text-sm font-medium`">
                          {descriptions}
                        </div>
                      </div>
                      <div className="mx-4 flex flex-wrap">
                        {tags.map((tag, id) => (
                          <span
                            className="outline outline-2 outline-offset-1 outline-indigo-300 dark:outline-green-300 truncate text-xs font-light font-roboto mb-2 mr-2 p-2 rounded max-h-8"
                            key={id}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </a>
                  </div>
                </motion.div>
              </Fragment>
            );
          })}
        </div>
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

export default Blog;
