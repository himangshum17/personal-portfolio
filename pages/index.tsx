import type { NextPage } from 'next';
import { PageContainer } from '../layouts';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <section className='py-20'>
        <div className='container'>
          <h1>hello world</h1>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
