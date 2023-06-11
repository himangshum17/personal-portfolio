import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
type PageContainerProps = {
  children: ReactNode;
};
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div>
      <Head>
        <title>Himangshu Mondal - Frontend Developer - Portfolio Website</title>
        <meta
          name='description'
          content='Portfolio of Himangshu Mondal, a Frontend Developer based in Durgapur, West Bengal, India'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default PageContainer;
