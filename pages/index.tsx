import type { NextPage } from 'next';
import { Hero, PageContainer, Projects } from '../layouts';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Hero />
      <Projects />
    </PageContainer>
  );
};

export default Home;
