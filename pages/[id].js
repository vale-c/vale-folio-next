import { getDatabase, getPage, getBlocks } from '../lib/notion';
import { databaseId } from './index.js';
import BlogLayout from '../components/BlogLayout';
import { RenderBlocks } from '../components/ContentBlocks';

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  console.log('blocks', blocks);
  return (
    <BlogLayout data={page} content={blocks}>
      <span className="text-sm text-gray-400">
        {new Date(page.created_time).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric'
        })}
      </span>

      <h1 className="mb-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
        {page.properties.Title.title[0].plain_text}
      </h1>

      <RenderBlocks blocks={blocks} />
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
