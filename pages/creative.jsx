import dynamic from 'next/dynamic';
import { Layout } from '../components/Layout';

const Circle = dynamic(() => import('../components/CodeArt/Circle'), {
  ssr: false
});

const Creative = () => (
  <Layout>
    <div className="m-4">
      <h1 className="text-3xl font-bold text-center mt-8">Creative Coding</h1>
      <Circle />
      <div className="p-2" />
    </div>
  </Layout>
);

export default Creative;
