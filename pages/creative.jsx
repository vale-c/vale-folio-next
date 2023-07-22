import dynamic from 'next/dynamic';
import { Layout } from '../components/Layout';

const Circle = dynamic(() => import('../components/CodeArt/Circle'), {
  ssr: false
});

const Creative = () => (
  <Layout>
    <div className="mt-12 mx-4">
      <div className="font-roboto text-indigo-400 dark:text-green-300 text-3xl md:text-4xl text-center hover:animate-pulse">
        🎧 Music Visualizer
      </div>
      <Circle />
      <div className="p-2" />
    </div>
  </Layout>
);

export default Creative;
