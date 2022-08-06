import { getDatabase, getPage, getBlocks } from '../lib/notion';
import { databaseId } from './index.js';
import BlogLayout from '../components/BlogLayout';
import { RenderBlocks } from '../components/ContentBlocks';

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  console.log(page);
  return (
    <BlogLayout data={page} content={blocks}>
      <div className="absolute top-0 left-0 w-screen">
        <img
          className="object-cover h-32 w-full"
          src={page?.cover?.external?.url || '/images/bg-cover.jpeg'}
          alt={page.Title}
        />
        <div className="flex justify-center -mt-14">
          <span
            className="text-5xl my-8"
            alt={page.properties.slug.rich_text[0].plain_text}
          >
            {page.icon.emoji}
          </span>
        </div>
      </div>
      <h1 className="mt-32 mb-8 text-3xl font-bold tracking-tight text-indigo-400 dark:text-green-400 md:text-5xl">
        {page.properties.Title.title[0].plain_text}
      </h1>
      <span className="mb-6 text-sm text-gray-400">
        {new Date(page.created_time).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })}
      </span>
      <RenderBlocks blocks={blocks} />
      <div className="flex justify-center">
        <a
          href="/"
          className="bg-indigo-100 text-indigo-700 dark:bg-green-100 dark:text-green-700 font-semibold py-2 px-4 my-8 rounded"
        >
          Back 🏠
        </a>
      </div>
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id)
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  };
};
